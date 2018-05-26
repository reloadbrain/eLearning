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

import eLearning.sf.converter.PreExamObligationTypeDTOtoPreExamObligation;
import eLearning.sf.converter.PreExamObligationTypeToPreExamObligationTypeDTO;
import eLearning.sf.dto.PreExamObligationTypeDTO;
import eLearning.sf.model.PreExamObligationType;
import eLearning.sf.service.PreExamObligationTypeService;

@Controller
@RequestMapping(value = "/api/pre-exam-obligation-types")
public class PreExamObligationTypeController {

	@Autowired
	PreExamObligationTypeService peots;
	
	@Autowired
	PreExamObligationTypeToPreExamObligationTypeDTO toDTO;
	
	@Autowired
	PreExamObligationTypeDTOtoPreExamObligation toPEOT;
	
	@GetMapping
	public ResponseEntity<List<PreExamObligationTypeDTO>> getPreExamObligationTypes() {
		return new ResponseEntity<>(toDTO.convert(peots.findeActive()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<PreExamObligationTypeDTO> getPreExamObligationType(@PathVariable long id) {
		return new ResponseEntity<PreExamObligationTypeDTO>(toDTO.convert(peots.getOne(id)), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> savePreExamObligationType(@Validated @RequestBody PreExamObligationTypeDTO preExamObligationTypeDTO , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligationType p = new PreExamObligationType();
		p = toPEOT.convert(preExamObligationTypeDTO);
		return new ResponseEntity<PreExamObligationTypeDTO>(toDTO.convert(peots.save(p)), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> editPreExamObligation(@Validated @RequestBody PreExamObligationTypeDTO preExamObligationTypeDTO , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligationType p = new PreExamObligationType();
		p = toPEOT.convert(preExamObligationTypeDTO);
		return new ResponseEntity<PreExamObligationTypeDTO>(toDTO.convert(peots.save(p)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteExamTerm(@PathVariable long id) {
		peots.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
