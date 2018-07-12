package eLearning.sf.controller;

import java.sql.Date;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.bind.annotation.RequestParam;

import eLearning.sf.converter.PreExamObligationRecordsDTOtoPreExamObligationRecords;
import eLearning.sf.converter.PreExamObligationRecordsToPreExamObligationRecordsDTO;
import eLearning.sf.dto.PreExamObligationsRecordsDTO;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.Student;
import eLearning.sf.service.PreExamObligationService;
import eLearning.sf.service.PreExamObligationsRecordsService;
import eLearning.sf.service.StudentService;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping(value = "/api/pre-exam-obligation-records")
@Slf4j
public class PreExamObligationRecController {

	@Autowired
	PreExamObligationsRecordsService peors;

	@Autowired
	PreExamObligationService ps;

	@Autowired
	StudentService studentService;

	@Autowired
	PreExamObligationRecordsToPreExamObligationRecordsDTO toDTO;

	@Autowired
	PreExamObligationRecordsDTOtoPreExamObligationRecords toPEOR;
	


	/*
	 * @GetMapping public ResponseEntity<List<PreExamObligationsRecordsDTO>>
	 * getPreExamObligationRecords() { return new
	 * ResponseEntity<>(toDTO.convert(peors.findAll()), HttpStatus.OK); }
	 */

	@GetMapping()
	// @PreAuthorize("hasRole('ROLE_ADMIN')") - provera uloga
	public ResponseEntity<?> getAllPreExamObligationRecords(@RequestParam("term") String term, Pageable pageable) {
		Page<PreExamObligationsRecords> peor = peors.listAllByPage(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(peor.getTotalPages()));
		return new ResponseEntity<List<PreExamObligationsRecordsDTO>>(toDTO.convert(peor.getContent()), headers,
				HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<PreExamObligationsRecordsDTO> getPreExamObligationRecord(@PathVariable long id) {
		return new ResponseEntity<PreExamObligationsRecordsDTO>(toDTO.convert(peors.getOne(id)), HttpStatus.OK);
	}

	@GetMapping(path = "student/{studentId}/course/{curseId}")
	public ResponseEntity<List<PreExamObligationsRecordsDTO>> getPreExamObligationRecordsByStudentIdAndCurseId(
			@PathVariable long studentId, @PathVariable long curseId) {
		return new ResponseEntity<List<PreExamObligationsRecordsDTO>>(
				toDTO.convert(peors.findByStudentIdAndCurseId(studentId, curseId)), HttpStatus.OK);
	}

	@GetMapping(path = "preexamobligation/{preExamObligationId}/sortpar/{sortPar}/sortdir/{sortDir}")
	public ResponseEntity<List<PreExamObligationsRecordsDTO>> getPreExamObligationRecordsByProfessorId(
			@PathVariable long preExamObligationId, @PathVariable String sortPar, @PathVariable String sortDir) {
		return new ResponseEntity<List<PreExamObligationsRecordsDTO>>(
				toDTO.convert(peors.findByPreExamObligationId(preExamObligationId, sortPar, sortDir)), HttpStatus.OK);
	}
	
	@GetMapping(value="points/student/{studentId}/course/{courseId}")
	public ResponseEntity<Integer> getPoints(
			@PathVariable long studentId, @PathVariable long courseId ){
		return new ResponseEntity<Integer>(peors.getAllPoints(studentId, courseId), HttpStatus.OK);
	}
	

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> savePreExamObligationsRecord(
			@Validated @RequestBody PreExamObligationsRecordsDTO preExamObligationsRecordsDTO, Errors errors) {
		if (errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligationsRecords p = new PreExamObligationsRecords();
		p = toPEOR.convert(preExamObligationsRecordsDTO);
		return new ResponseEntity<PreExamObligationsRecordsDTO>(toDTO.convert(peors.save(p)), HttpStatus.OK);
	}
	
	@PostMapping(value = "grade" ,consumes = "application/json")
	public ResponseEntity<?> savePreExamObligationsRecords(
			@RequestBody List<PreExamObligationsRecordsDTO> preExamObRecsDTO){
		List<PreExamObligationsRecords> p = toPEOR.convert(preExamObRecsDTO);
		peors.SetTrue(p);
		return new ResponseEntity<String>("Saved" , HttpStatus.OK);
		
	}

	@PostMapping(path = "create-records/{id}/{year}/{month}/{day}")
	public ResponseEntity<?> createPreExamObligationsRecord(@PathVariable Long id, @PathVariable int year,
			@PathVariable int month, @PathVariable int day) {

		Date date = new Date(year - 1900, month - 1, day);
		PreExamObligation peo = new PreExamObligation();
		peo = ps.getOne(id);
		List<Student> students = studentService.findByCourse(peo.getCourse().getCourseId());
		peors.createRecordsforStudents(students, id, date, peo);
		return new ResponseEntity<String>("Created PreExamORecords", HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> editPreExamObligationsRecord(
			@Validated @RequestBody PreExamObligationsRecordsDTO preExamObligationsRecordsDTO, Errors errors) {
		if (errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		PreExamObligationsRecords p = new PreExamObligationsRecords();
		p = toPEOR.convert(preExamObligationsRecordsDTO);
		return new ResponseEntity<PreExamObligationsRecordsDTO>(toDTO.convert(peors.save(p)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deletePreExamObligationsRecord(@PathVariable long id) {
		peors.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
