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
import org.springframework.web.bind.annotation.RequestParam;

import eLearning.sf.converter.StudentRecordsDtoToStudentRecords;
import eLearning.sf.converter.StudentRecordsToStudentRecordsDto;
import eLearning.sf.dto.ExamStudentRecordsDto;
import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.serviceInterface.ExamStudentRecordsServiceInterface;

@Controller
@RequestMapping(value = "/api/exams-student-records")
public class ExamStudentRecordsController {

	@Autowired
	private ExamStudentRecordsServiceInterface examStudentRecordsService;

	@Autowired
	private StudentRecordsToStudentRecordsDto recordsToRecordsDtoConverter;

	@Autowired
	private StudentRecordsDtoToStudentRecords recordsDtoToRecordsConverter;

	@GetMapping
	public ResponseEntity<List<ExamStudentRecordsDto>> getExamStudentRecords() {
		return new ResponseEntity<>(recordsToRecordsDtoConverter.convert(examStudentRecordsService.findAll()),
				HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ExamStudentRecordsDto> getExamStudentRecords(@PathVariable long id) {
		return new ResponseEntity<ExamStudentRecordsDto>(
				recordsToRecordsDtoConverter.convert(examStudentRecordsService.getOne(id)), HttpStatus.OK);
	}

	@GetMapping(path = "/by-student-course")
	public ResponseEntity<List<ExamStudentRecordsDto>> getByStudentAndCourse(
			@RequestParam("studentUsername") String studentUsername, @RequestParam("courseId") Long courseId) {
		List<ExamStudentRecords> records = examStudentRecordsService.getByStudentAndCourse(studentUsername, courseId);

		return new ResponseEntity<List<ExamStudentRecordsDto>>(recordsToRecordsDtoConverter.convert(records),
				HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<ExamStudentRecordsDto> saveExamStudentRecords(
			@RequestBody ExamStudentRecordsDto examStudentRecordsDto) {
		ExamStudentRecords records = recordsDtoToRecordsConverter.convert(examStudentRecordsDto);
		return new ResponseEntity<ExamStudentRecordsDto>(
				recordsToRecordsDtoConverter.convert(examStudentRecordsService.save(records)), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ExamStudentRecordsDto> editExamStudentRecords(
			@RequestBody ExamStudentRecordsDto examStudentRecordsDto) {
		ExamStudentRecords records = recordsDtoToRecordsConverter.convert(examStudentRecordsDto);
		return new ResponseEntity<ExamStudentRecordsDto>(
				recordsToRecordsDtoConverter.convert(examStudentRecordsService.save(records)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<ExamStudentRecordsDto> deleteExamStudentRecords(@PathVariable long id) {
		examStudentRecordsService.delete(id);
		return new ResponseEntity<ExamStudentRecordsDto>(
				recordsToRecordsDtoConverter.convert(examStudentRecordsService.getOne(id)), HttpStatus.OK);
	}
}
