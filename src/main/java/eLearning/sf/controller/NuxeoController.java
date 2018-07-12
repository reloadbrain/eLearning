package eLearning.sf.controller;

import java.io.IOException;

import org.nuxeo.client.objects.Document;
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

import eLearning.sf.nuxeo.NuxeoService;


@Controller
@RequestMapping(value = "api/nuxeo")
public class NuxeoController {

	@Autowired
	private NuxeoService nuxeo;
	
	@GetMapping(value = "/document-request/{id}/{isResourceDocument}")
	public ResponseEntity<?> get(@PathVariable("id") String id, @PathVariable("isResourceDocument") boolean isResourceDocument) throws IOException {

		Document doc = nuxeo.findResourceById(id, isResourceDocument);
				
		return new ResponseEntity<Document> (doc, HttpStatus.OK);
	}
	
	@PostMapping(value="/upload/{username}")
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @PathVariable("username") String username) throws Exception {
		String nuxeoResponse = nuxeo.fileUpload(file, username);
		return new ResponseEntity<String> (nuxeoResponse, HttpStatus.OK);
	}
	
	
	@PostMapping(value="/upload-document/{id}")
	public ResponseEntity<?> uploadDoc(@RequestParam("file") MultipartFile file, @PathVariable("id") Long id) throws Exception {
		String nuxeoResponse = nuxeo.documentUpload(file, id);
		if (nuxeoResponse == null) {
			return new ResponseEntity<String> ("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
		}
		return new ResponseEntity<String> (nuxeoResponse, HttpStatus.OK);
	}
	
}
