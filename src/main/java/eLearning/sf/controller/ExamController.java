package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
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

import eLearning.sf.converter.ExamDtoToExam;
import eLearning.sf.converter.ExamToExamDto;
import eLearning.sf.dto.ExamDto;
import eLearning.sf.model.Exam;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Controller
@RequestMapping(value = "/api/exams")
public class ExamController {

	@Autowired
	private ExamServiceInterface examService;

	@Autowired
	private ExamDtoToExam examDtoToExamConverter;

	@Autowired
	private ExamToExamDto examToExamDtoConverter;

	// @GetMapping
	// public ResponseEntity<List<ExamDto>> getExams() {
	// return new
	// ResponseEntity<>(examToExamDtoConverter.convert(examService.findAll()),
	// HttpStatus.OK);
	// }

	@GetMapping
	public ResponseEntity<List<ExamDto>> getAllExams(@RequestParam("term") String term, Pageable pageable) {
		Page<Exam> exams = examService.listAllByPage(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(exams.getTotalPages()));
		return new ResponseEntity<List<ExamDto>>(examToExamDtoConverter.convert(exams.getContent()), headers,
				HttpStatus.OK);
	}

	@GetMapping(path = "/by-month")
	public ResponseEntity<List<ExamDto>> getAllByTerm(@RequestParam("termMonth") int termMonth,
			@RequestParam("term") String searchTerm, Pageable pageable) {
		Page<Exam> exams = examService.findAllByTermMonthPageAndSearch(termMonth, searchTerm, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(exams.getTotalPages()));
		return new ResponseEntity<List<ExamDto>>(examToExamDtoConverter.convert(exams.getContent()), headers,
				HttpStatus.OK);
	}

	@GetMapping(path = "/by-professor-term")
	public ResponseEntity<List<ExamDto>> getAllByProfessor(@RequestParam("professorUsername") String professorUsername,
			@RequestParam("termMonth") int termMonth, @RequestParam("term") String searchTerm, Pageable pageable) {
		Page<Exam> exams = examService.findAllByTermMonthAndProfessorPageAndSearch(professorUsername, termMonth,
				searchTerm, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(exams.getTotalPages()));
		return new ResponseEntity<List<ExamDto>>(examToExamDtoConverter.convert(exams.getContent()), headers,
				HttpStatus.OK);
	}

	@GetMapping(path = "/by-professor")
	public ResponseEntity<List<ExamDto>> getAllByProfessor(
			@RequestParam("professorUsername") String professorUsername) {
		List<Exam> exams = examService.findAllByProfessor(professorUsername);
		return new ResponseEntity<List<ExamDto>>(examToExamDtoConverter.convert(exams), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ExamDto> getExam(@PathVariable long id) {
		return new ResponseEntity<ExamDto>(examToExamDtoConverter.convert(examService.getOne(id)), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<ExamDto> saveExam(@RequestBody ExamDto examDto) {
		Exam exam = examDtoToExamConverter.convert(examDto);
		return new ResponseEntity<>(examToExamDtoConverter.convert(examService.save(exam)), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ExamDto> editExam(@RequestBody ExamDto examDto) {
		Exam exam = examDtoToExamConverter.convert(examDto);
		return new ResponseEntity<ExamDto>(examToExamDtoConverter.convert(examService.save(exam)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<ExamDto> deleteExam(@PathVariable long id) {
		examService.delete(id);
		return new ResponseEntity<ExamDto>(examToExamDtoConverter.convert(examService.getOne(id)), HttpStatus.OK);
	}
}
