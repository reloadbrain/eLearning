package eLearning.sf.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import java.io.Console;
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

import eLearning.sf.converter.CourseDTOtoCourse;
import eLearning.sf.converter.CourseToCorseDTO;
import eLearning.sf.dto.CourseDTO;
import eLearning.sf.dto.ProfessorDTO;
import eLearning.sf.model.Course;
import eLearning.sf.model.Professor;
import eLearning.sf.service.CourseService;


@Controller
@RequestMapping(value = "/api/courses")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@Autowired
	private CourseToCorseDTO courseToCorseDTO;

	@Autowired
	private CourseDTOtoCourse courseDTOtoCourse;


	@GetMapping
	public ResponseEntity<List<CourseDTO>> getPayments() {
		return new ResponseEntity<>(courseToCorseDTO.convert(courseService.findAll()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<CourseDTO> getPaymentsById(@PathVariable long id) {
		return new ResponseEntity<CourseDTO>(courseToCorseDTO.convert(courseService.getOne(id)),
				HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<CourseDTO> saveProfessors(@RequestBody CourseDTO courseDTO) {
		Course course = courseDTOtoCourse.convert(courseDTO);
		return new ResponseEntity<CourseDTO>(courseToCorseDTO.convert(courseService.save(course)),
				HttpStatus.OK);
	}


	@PutMapping
	public ResponseEntity<CourseDTO> editPayments(@RequestBody CourseDTO courseDTO) {
		Course course = courseDTOtoCourse.convert(courseDTO);
		return new ResponseEntity<CourseDTO>(courseToCorseDTO.convert(courseService.save(course)),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<String> deletePayments(@PathVariable long id) {
		courseService.delete(id);
		return new ResponseEntity<String>("Success",HttpStatus.OK);
	}

}
