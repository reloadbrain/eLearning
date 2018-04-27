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

import eLearning.sf.model.ExamTerm;
import eLearning.sf.serviceInterface.ExamTermServiceInterface;

@Controller(value = "api/exams")
public class ExamTermController {

	@Autowired
	ExamTermServiceInterface examTermService;

	@GetMapping
	public ResponseEntity<List<ExamTerm>> getExamTerms() {
		return new ResponseEntity<>(examTermService.findAll(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ExamTerm> getExamTerm(@PathVariable long id) {
		return new ResponseEntity<>(examTermService.getOne(id), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> saveExamTerm(@RequestBody ExamTerm examTerm) {
		return new ResponseEntity<>(examTermService.save(examTerm), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ExamTerm> editExamTerm(@RequestBody ExamTerm examTerm) {
		return new ResponseEntity<ExamTerm>(examTermService.save(examTerm), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<ExamTerm> deleteExamTerm(@PathVariable long id) {
		examTermService.delete(id);
		return new ResponseEntity<ExamTerm>(examTermService.getOne(id), HttpStatus.OK);
	}
}
