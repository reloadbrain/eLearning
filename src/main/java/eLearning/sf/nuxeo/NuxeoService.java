package eLearning.sf.nuxeo;

import java.io.IOException;

import org.nuxeo.client.objects.Document;
import org.springframework.web.multipart.MultipartFile;

public interface NuxeoService {

	Document findResourceById(String id, boolean isResourceDocument)
			throws IOException;

	String batchInitialization();
	
	String batchFileUpload(MultipartFile file) throws IOException;
	
	String fileUpload(MultipartFile file) throws Exception;
	
	String documentUpload(MultipartFile file) throws Exception;
	
	
}
