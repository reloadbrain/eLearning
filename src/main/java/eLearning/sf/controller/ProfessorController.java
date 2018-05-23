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

import eLearning.sf.converter.ProfessorDTOtoProfessor;
import eLearning.sf.converter.ProfessorToProfessorDTO;
import eLearning.sf.dto.ProfessorDTO;
import eLearning.sf.model.Professor;
import eLearning.sf.service.ProfessorService;
import eLearning.sf.serviceInterface.ProfessorServiceInterface;

@Controller
@RequestMapping(value = "/api/professors")
public class ProfessorController {
	
	@Autowired
	private ProfessorService professorService;
	

	@Autowired
	private ProfessorToProfessorDTO professorToProfessorDTO;

	@Autowired
	private ProfessorDTOtoProfessor professorDTOtoProfessor;


	@GetMapping
	public ResponseEntity<List<ProfessorDTO>> getProfessors() {
		return new ResponseEntity<>(professorToProfessorDTO.convert(professorService.findAll()), HttpStatus.OK);
	}

}
