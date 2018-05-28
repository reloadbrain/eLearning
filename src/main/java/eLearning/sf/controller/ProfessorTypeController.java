package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.ProfessorTypeDTOtoProfessorType;
import eLearning.sf.converter.ProfessorTypeToProfessorTypeDTO;
import eLearning.sf.dto.ProfessorTypeDTO;
import eLearning.sf.model.ProfessorType;
import eLearning.sf.service.ProfessorTypeService;

@Controller
@RequestMapping(value = "/api/professor_types")
public class ProfessorTypeController {

	@Autowired
	private ProfessorTypeService professorTypeService;
	

	@Autowired
	private ProfessorTypeToProfessorTypeDTO professorTypeToProfessorTypeDTO;

	@Autowired
	private ProfessorTypeDTOtoProfessorType professorTypeDTOtoProfessorType;


	@GetMapping
	public ResponseEntity<List<ProfessorTypeDTO>> getProfessorTypes() {
		return new ResponseEntity<>(professorTypeToProfessorTypeDTO.convert(professorTypeService.findAll()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ProfessorTypeDTO> getProfessorTypesById(@PathVariable long id) {
		return new ResponseEntity<ProfessorTypeDTO>(professorTypeToProfessorTypeDTO.convert(professorTypeService.getOne(id)),
				HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<ProfessorTypeDTO> saveProfessorTypes(@RequestBody ProfessorTypeDTO professorTypeDTO) {
		ProfessorType professorType = professorTypeDTOtoProfessorType.convert(professorTypeDTO);
		return new ResponseEntity<ProfessorTypeDTO>(professorTypeToProfessorTypeDTO.convert(professorTypeService.save(professorType)),
				HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ProfessorTypeDTO> editProfessorTypes(@RequestBody ProfessorTypeDTO professorTypeDTO) {
		ProfessorType professorType = professorTypeDTOtoProfessorType.convert(professorTypeDTO);
		return new ResponseEntity<ProfessorTypeDTO>(professorTypeToProfessorTypeDTO.convert(professorTypeService.save(professorType)),
				HttpStatus.OK);
	};

	
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<String> deleteProfessorTypes(@PathVariable long id) {
		professorTypeService.delete(id);
		return new ResponseEntity<String>("Success",HttpStatus.OK);
	}
}
