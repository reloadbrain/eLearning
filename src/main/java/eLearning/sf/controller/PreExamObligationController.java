package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.PreExamObligationDTOtoPreExamObligation;
import eLearning.sf.converter.PreExamObligationToPreExamObligationDTO;
import eLearning.sf.dto.PreExamObligationDTO;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.service.PreExamObligationService;

@Controller
@RequestMapping(value = "/api/pre-exam-obligations")
public class PreExamObligationController {
	
	@Autowired
	PreExamObligationService peos;
	
	@Autowired
	PreExamObligationDTOtoPreExamObligation toPEO;

	@Autowired
	PreExamObligationToPreExamObligationDTO toDTO;
	
	@GetMapping
	public ResponseEntity<List<PreExamObligationDTO>> getPreExamObligations() {
		return new ResponseEntity<>(toDTO.convert(peos.findAll()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<PreExamObligationDTO> getPreExamObligation(@PathVariable long id) {
		return new ResponseEntity<PreExamObligationDTO>(toDTO.convert(peos.getOne(id)), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> savePreExamObligation(@Validated @RequestBody PreExamObligationDTO preExamObligationDTO , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligation p = new PreExamObligation();
		p = toPEO.convert(preExamObligationDTO);
		return new ResponseEntity<PreExamObligationDTO>(toDTO.convert(peos.save(p)), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> editPreExamObligation(@Validated @RequestBody PreExamObligationDTO preExamObligationDTO , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligation p = new PreExamObligation();
		p = toPEO.convert(preExamObligationDTO);
		return new ResponseEntity<PreExamObligationDTO>(toDTO.convert(peos.save(p)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteExamTerm(@PathVariable long id) {
		peos.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(path="course{courseId}")
	public ResponseEntity<List<PreExamObligationDTO>>getPreExamObligationsByCourseId(@PathVariable long courseId){
		return new ResponseEntity<List<PreExamObligationDTO>>(toDTO.convert(peos.findByCourseId(courseId)),HttpStatus.OK);
	}
	
}
