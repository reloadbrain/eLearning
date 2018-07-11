package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.DocToDocDto;
import eLearning.sf.dto.EDocumentDTO;
import eLearning.sf.serviceInterface.EDocumentServiceInterface;

@Controller
@RequestMapping(value="/api/e-document")
public class EDocumentController {

	@Autowired
	private EDocumentServiceInterface edocServiceI;
	
	@Autowired
	private DocToDocDto docToDocDto;
	
	@GetMapping
	public ResponseEntity<List<EDocumentDTO>> getAllDocuments() {
		return new ResponseEntity<List<EDocumentDTO>> (docToDocDto.convert(edocServiceI.findAll()), HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<List<EDocumentDTO>> getDocumentsById(@PathVariable("id") Long id) {
		return new ResponseEntity<List<EDocumentDTO>> (docToDocDto.convert(edocServiceI.getDocsByUserId(id)), HttpStatus.OK);
	}
	
	
}
