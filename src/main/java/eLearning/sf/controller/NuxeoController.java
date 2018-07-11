package eLearning.sf.controller;

import java.io.IOException;
import java.util.Optional;

import org.json.JSONException;
import org.nuxeo.client.objects.Document;
import org.nuxeo.client.objects.upload.BatchUpload;
import org.nuxeo.client.objects.upload.BatchUploadManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import eLearning.sf.model.EDocument;
import eLearning.sf.model.Student;
import eLearning.sf.model.User;
import eLearning.sf.nuxeo.NuxeoService;
import eLearning.sf.service.StudentService;
import eLearning.sf.serviceInterface.EDocumentServiceInterface;
import eLearning.sf.serviceInterface.IUserService;
import eLearning.sf.serviceInterface.StudentServiceInterface;


@Controller
@RequestMapping(value = "/nuxeo")
public class NuxeoController {

	@Autowired
	private NuxeoService nuxeo;
	
	@Autowired
	private IUserService iUserService;
	
	@Autowired
	private EDocumentServiceInterface iDocService;
	
	@Autowired
	private StudentServiceInterface studentServiceI;
	
	@GetMapping(value = "/document-request/{id}/{isResourceDocument}")
	public ResponseEntity<?> get(@PathVariable("id") String id, @PathVariable("isResourceDocument") boolean isResourceDocument) throws IOException {

		Document doc = nuxeo.findResourceById(id, isResourceDocument);
				
		return new ResponseEntity<Document> (doc, HttpStatus.OK);
	}
	
	@GetMapping(value = "/batch-init")
	public ResponseEntity<?> batchInit() {
		String o = nuxeo.batchInitialization();
		
		return new ResponseEntity<String> (o, HttpStatus.OK);
	}
	
	@PostMapping(value="/upload/{username}")
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @PathVariable("username") String username) throws Exception {
		Optional<User> u = iUserService.findByUsername(username);
		
		String nuxeoResponse = nuxeo.fileUpload(file);
		u.get().setImagePath(nuxeoResponse);
		iUserService.save(u.get());
		return new ResponseEntity<String> (nuxeoResponse, HttpStatus.OK);
	}
	
	
	@PostMapping(value="/upload-document/{id}")
	public ResponseEntity<?> uploadDoc(@RequestParam("file") MultipartFile file, @PathVariable("id") Long id) throws Exception {
		
		System.out.println("        -----IDD" + id);
		Student stud = studentServiceI.getByUserId(id);
		String nuxeoResponse = nuxeo.documentUpload(file);
		EDocument edoc = new EDocument();
		edoc.setNuxeoId(nuxeoResponse);
		edoc.setStudent(stud);
		iDocService.save(edoc);
		
		return new ResponseEntity<String> (nuxeoResponse, HttpStatus.OK);
	}
	
}
