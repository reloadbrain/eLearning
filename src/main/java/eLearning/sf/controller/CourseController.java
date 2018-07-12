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

import eLearning.sf.converter.CourseDTOtoCourse;
import eLearning.sf.converter.CourseToCorseDTO;
import eLearning.sf.dto.CourseDTO;
import eLearning.sf.model.Course;
import eLearning.sf.service.CourseService;
import eLearning.sf.service.StudentService;


@Controller
@RequestMapping(value = "/api/courses")
public class CourseController {

	@Autowired
	private CourseService courseService;
	

	@Autowired
	private StudentService studentService;

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
	
	@GetMapping(value= "student/{studentId}")
	public ResponseEntity<List<CourseDTO>> getCoureseForStudent(@PathVariable Long studentId){
		return new ResponseEntity<List<CourseDTO>>(courseToCorseDTO.convert(courseService.findByStudent(studentId)), HttpStatus.OK);
	}
	
	@GetMapping(value= "professor/{professorId}")
	public ResponseEntity<List<CourseDTO>> getCoureseForProfessor(@PathVariable Long professorId){
		return new ResponseEntity<List<CourseDTO>>(courseToCorseDTO.convert(courseService.findByProfessor(professorId)), HttpStatus.OK);
	}
	

	@PostMapping(consumes = "application/json")
	public ResponseEntity<CourseDTO> saveProfessors(@RequestBody CourseDTO courseDTO) {
		Course course = courseDTOtoCourse.convert(courseDTO);
		return new ResponseEntity<CourseDTO>(courseToCorseDTO.convert(courseService.save(course)),
				HttpStatus.OK);
	}
	
	@PostMapping(path = "/{id}" , consumes = "application/json")
	public ResponseEntity<String> postCourse(@PathVariable long id , @RequestBody List<Long> ids) {
		
		
		for (Long long1 : ids) {
			courseService.addStudentCourse(id, long1);
		}
		
		return new ResponseEntity<String>("OK" , HttpStatus.OK);
	}


	@PutMapping
	public ResponseEntity<CourseDTO> editPayments(@RequestBody CourseDTO courseDTO) {
		Course course = courseDTOtoCourse.convert(courseDTO);
		return new ResponseEntity<CourseDTO>(courseToCorseDTO.convert(courseService.save(course)),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<String> deletePayments(@PathVariable long id) {
		Course course = courseService.getOne(id);
		course.setActive(false);
		courseService.save(course);
		return new ResponseEntity<String>("Success",HttpStatus.OK);
	}

}
