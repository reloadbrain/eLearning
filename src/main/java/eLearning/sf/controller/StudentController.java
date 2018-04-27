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

import eLearning.sf.model.Student;
import eLearning.sf.serviceInterface.StudentServiceInterface;

@Controller(value = "api/students")
public class StudentController {

	@Autowired
	StudentServiceInterface studentService;

	@GetMapping
	public ResponseEntity<List<Student>> getStudents() {
		return new ResponseEntity<>(studentService.findAll(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Student> getStudent(@PathVariable long id) {
		return new ResponseEntity<>(studentService.getOne(id), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> saveStudent(@RequestBody Student student) {
		return new ResponseEntity<>(studentService.save(student), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Student> editStudent(@RequestBody Student student) {
		studentService.save(student);

		return new ResponseEntity<Student>(student, HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Student> deleteStudent(@PathVariable long id) {
		studentService.delete(id);
		return new ResponseEntity<Student>(studentService.getOne(id), HttpStatus.OK);
	}
}
