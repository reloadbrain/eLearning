package eLearning.sf.nuxeo;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.apache.tomcat.util.codec.binary.Base64;
import org.json.JSONObject;
import org.nuxeo.client.objects.Document;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import eLearning.sf.model.EDocument;
import eLearning.sf.model.Student;
import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.EDocumentServiceInterface;
import eLearning.sf.serviceInterface.IUserService;
import eLearning.sf.serviceInterface.StudentServiceInterface;

@Service
public class NuxeoServiceImpl implements NuxeoService {

	@Value("${resource-by-id-url}")
	private String resourceByIdUrl;

	@Value("${batch-initialization}")
	private String batchInitUrl;

	@Value("${batch-file-upload}")
	private String batchUploadUrl;

	@Value("${upload-file-image}")
	private String imageUploadUrl;

	@Value("${upload-file-docs}")
	private String docsUploadUrl;

	@Autowired
	HttpHeaders httpHeaders;
	
	@Autowired
	private EDocumentServiceInterface iDocService;
	
	@Autowired
	private IUserService iUserService;
	
	@Autowired
	private StudentServiceInterface studentServiceI;

	@Autowired
	RestTemplate restTemplate;

	private ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,
			false);

	@Override
	public Document findResourceById(String id, boolean isResourceDocument) throws IOException {

		getJsonFromNuxeoApiByFolderNameForResources(resourceByIdUrl, id, isResourceDocument);
		// resourceByIdUrl = resourceByIdUrl != null ? null : resourceByIdUrl;
		if (resourceByIdUrl != null) {
			String returnJson = getJsonFromNuxeoApiByFolderNameForResources(resourceByIdUrl, id, isResourceDocument);
			Document document = null;
			if (returnJson != null && !returnJson.isEmpty()) {
				document = mapper.readValue(returnJson, Document.class);
				return document;
			}
		}
		return null;
	}

	private String getJsonFromNuxeoApiByFolderNameForResources(String urlParam, String folderName,
			boolean isResourceDocument) {
		if (urlParam == null || urlParam.isEmpty())
			return null;
		if (folderName != null && folderName.contains("search"))
			return null;

		try {
			// String url = MessageFormat.format(urlParam, folderName);
			// HttpEntity<String> httpEntity = isResourceDocument == true ? new
			// HttpEntity<String>(httpHeadersForResource) : new
			// HttpEntity<String>(httpHeaders);
			Map<String, String> params = new HashMap<>();
			params.put("id", folderName);
			HttpEntity<String> httpEntity = new HttpEntity<String>(httpHeaders);
			ResponseEntity<String> response = restTemplate.exchange(urlParam, HttpMethod.GET, httpEntity, String.class,
					params);

			return response.getBody();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@SuppressWarnings("rawtypes")
	@Override
	public String batchInitialization() {
		HttpEntity<String> httpEntity = new HttpEntity<String>(httpHeaders);
		ResponseEntity<? extends HashMap> response = restTemplate.exchange(batchInitUrl, HttpMethod.POST, httpEntity,
				new HashMap().getClass());
		return (String) response.getBody().get("batchId");
	}

	@Override
	public String batchFileUpload(MultipartFile file) throws IOException {
		LinkedMultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
		bodyMap.add("file", new FileMessageResource(file.getBytes(), file.getName()));

		String auth = "Administrator" + ":" + "Administrator";
		byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
		String authHeader = "Basic " + new String(encodedAuth);

		Map<String, String> params = new HashMap<>();
		String batchId = batchInitialization();
		params.put("myBatchId", batchId);
		params.put("fileIdx", "0");
		HttpHeaders fileHeaders = new HttpHeaders();
		fileHeaders.set("X-File-Name", file.getName());
		fileHeaders.set("X-File-Type", "application/octet-stream");
		fileHeaders.set("Authorization", authHeader);
		fileHeaders.setContentType(MediaType.MULTIPART_FORM_DATA);

		HttpEntity<MultiValueMap<String, Object>> httpEntity = new HttpEntity<>(bodyMap, fileHeaders);
		restTemplate.exchange(batchUploadUrl, HttpMethod.POST, httpEntity, String.class, params);
		return batchId;
	}

	@Override
	@SuppressWarnings("rawtypes")
	public String fileUpload(MultipartFile file, String username) throws Exception {

		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		Optional<User> u = iUserService.findByUsername(username);
		
		HttpEntity<String> httpEntity = new HttpEntity<String>(upload(file), httpHeaders);
		ResponseEntity<? extends HashMap> response = restTemplate.exchange(imageUploadUrl, HttpMethod.POST, httpEntity,
				new HashMap().getClass());
		u.get().setImagePath((String) response.getBody().get("uid"));
		iUserService.save(u.get());
		return (String) response.getBody().get("uid");
	}

	private String upload(MultipartFile file) throws Exception {
		String batchFileUploadId = batchFileUpload(file);
		JSONObject reqBody = new JSONObject();
		JSONObject properties = new JSONObject();
		JSONObject fileContent = new JSONObject();
		reqBody.put("entity-type", "document");
		reqBody.put("name", file.getOriginalFilename());
		reqBody.put("type", "File");
		properties.put("dc:title", file.getOriginalFilename());
		fileContent.put("upload-batch", batchFileUploadId);
		fileContent.put("upload-fileId", "0");
		properties.put("file:content", fileContent);
		reqBody.put("properties", properties);
		return reqBody.toString();
	}

	@Override
	@SuppressWarnings("rawtypes")
	public String documentUpload(MultipartFile file, Long id) throws Exception {
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		
		if(!iUserService.isUserStudent(iUserService.getOne(id))) {
			return null;
		}
		
		Student stud = studentServiceI.getByUserId(id);
		EDocument edoc = new EDocument();
		
		HttpEntity<String> httpEntity = new HttpEntity<String>(upload(file), httpHeaders);
		ResponseEntity<? extends HashMap> response = restTemplate.exchange(docsUploadUrl, HttpMethod.POST, httpEntity,
				new HashMap().getClass());
		edoc.setNuxeoId((String) response.getBody().get("uid"));
		edoc.setStudent(stud);
		iDocService.save(edoc);
		return (String) response.getBody().get("uid");
	}

}
