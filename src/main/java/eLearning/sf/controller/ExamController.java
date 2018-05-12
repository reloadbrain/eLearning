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

import eLearning.sf.model.Exam;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Controller(value = "/api/exams")
@RequestMapping(value = "/api/exams")
public class ExamController {

	@Autowired
	ExamServiceInterface examService;

	@GetMapping
	public ResponseEntity<List<Exam>> getExams() {
		return new ResponseEntity<>(examService.findAll(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Exam> getExam(@PathVariable long id) {
		return new ResponseEntity<>(examService.getOne(id), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> saveExam(@RequestBody Exam exam) {
		return new ResponseEntity<>(examService.save(exam), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Exam> editExam(@RequestBody Exam exam) {
		return new ResponseEntity<Exam>(examService.save(exam), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Exam> deleteExam(@PathVariable long id) {
		examService.delete(id);
		return new ResponseEntity<Exam>(examService.getOne(id), HttpStatus.OK);
	}
}
