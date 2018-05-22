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

import eLearning.sf.converter.ExamTermDtoToExamTerm;
import eLearning.sf.converter.ExamTermToExamTermDto;
import eLearning.sf.dto.ExamTermDto;
import eLearning.sf.model.ExamTerm;
import eLearning.sf.serviceInterface.ExamTermServiceInterface;

@Controller
@RequestMapping(value = "/api/exam-terms")
public class ExamTermController {

	@Autowired
	private ExamTermServiceInterface examTermService;

	@Autowired
	private ExamTermDtoToExamTerm termDtoToTermConverter;

	@Autowired
	private ExamTermToExamTermDto termToTermDtoConverter;

	@GetMapping
	public ResponseEntity<List<ExamTermDto>> getExamTerms() {
		return new ResponseEntity<>(termToTermDtoConverter.convert(examTermService.findAll()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<ExamTermDto> getExamTerm(@PathVariable long id) {
		return new ResponseEntity<ExamTermDto>(termToTermDtoConverter.convert(examTermService.getOne(id)),
				HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<ExamTermDto> saveExamTerm(@RequestBody ExamTermDto examTermDto) {
		ExamTerm examTerm = termDtoToTermConverter.convert(examTermDto);
		return new ResponseEntity<ExamTermDto>(termToTermDtoConverter.convert(examTermService.save(examTerm)),
				HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<ExamTermDto> editExamTerm(@RequestBody ExamTermDto examTermDto) {
		ExamTerm examTerm = termDtoToTermConverter.convert(examTermDto);
		return new ResponseEntity<ExamTermDto>(termToTermDtoConverter.convert(examTermService.save(examTerm)),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<ExamTermDto> deleteExamTerm(@PathVariable long id) {
		examTermService.delete(id);
		return new ResponseEntity<ExamTermDto>(termToTermDtoConverter.convert(examTermService.getOne(id)),
				HttpStatus.OK);
	}
}
