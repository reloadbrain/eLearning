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

import eLearning.sf.converter.StudentDtoToStudent;
import eLearning.sf.converter.StudentToStudentDto;
import eLearning.sf.dto.StudentDto;
import eLearning.sf.model.Student;
import eLearning.sf.serviceInterface.StudentServiceInterface;

@Controller
@RequestMapping(value = "/api/students")
public class StudentController {

	@Autowired
	private StudentServiceInterface studentService;

	@Autowired
	private StudentDtoToStudent studentDtoToStudentConverter;

	@Autowired
	private StudentToStudentDto studentToStudentDtoConverter;

	@GetMapping
	public ResponseEntity<List<StudentDto>> getStudents() {
		return new ResponseEntity<>(studentToStudentDtoConverter.convert(studentService.findAll()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<StudentDto> getStudent(@PathVariable long id) {
		return new ResponseEntity<>(studentToStudentDtoConverter.convert(studentService.getOne(id)), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<StudentDto> saveStudent(@RequestBody StudentDto studentDto) {
		Student student = studentDtoToStudentConverter.convert(studentDto);
		return new ResponseEntity<StudentDto>(studentToStudentDtoConverter.convert(studentService.save(student)),
				HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<StudentDto> editStudent(@RequestBody StudentDto studentDto) {
		Student student = studentDtoToStudentConverter.convert(studentDto);
		return new ResponseEntity<StudentDto>(studentToStudentDtoConverter.convert(studentService.save(student)),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<StudentDto> deleteStudent(@PathVariable long id) {
		studentService.delete(id);
		return new ResponseEntity<StudentDto>(studentToStudentDtoConverter.convert(studentService.getOne(id)),
				HttpStatus.OK);
	}
}
