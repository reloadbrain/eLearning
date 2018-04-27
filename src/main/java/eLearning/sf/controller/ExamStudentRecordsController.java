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

import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.serviceInterface.ExamStudentRecordsServiceInterface;

@Controller(value = "api/exams")
public class ExamStudentRecordsController {

	@Autowired
	ExamStudentRecordsServiceInterface examStudentRecordsService;

	@GetMapping
	public ResponseEntity<List<ExamStudentRecords>> getExamStudentRecords() {
		return new ResponseEntity<>(examStudentRecordsService.findAll(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ExamStudentRecords> getExamStudentRecords(@PathVariable long id) {
		return new ResponseEntity<ExamStudentRecords>(examStudentRecordsService.getOne(id), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<ExamStudentRecords> saveExamStudentRecords(
			@RequestBody ExamStudentRecords examStudentRecords) {
		return new ResponseEntity<ExamStudentRecords>(examStudentRecordsService.save(examStudentRecords),
				HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ExamStudentRecords> editExamStudentRecords(
			@RequestBody ExamStudentRecords examStudentRecords) {
		return new ResponseEntity<ExamStudentRecords>(examStudentRecordsService.save(examStudentRecords),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<ExamStudentRecords> deleteExamStudentRecords(@PathVariable long id) {
		examStudentRecordsService.delete(id);
		return new ResponseEntity<ExamStudentRecords>(examStudentRecordsService.getOne(id), HttpStatus.OK);
	}
}
