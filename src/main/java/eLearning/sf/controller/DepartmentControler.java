package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import eLearning.sf.converter.DepartmentDtoToDepartment;
import eLearning.sf.converter.DepartmentToDepartmentDto;
import eLearning.sf.dto.DepartmentDto;
import eLearning.sf.model.Department;
import eLearning.sf.service.DepartmentService;

@Controller
@RequestMapping(value="api/departments")
public class DepartmentControler {
	
	@Autowired
	DepartmentService dser;
	
	@Autowired
	DepartmentToDepartmentDto toDTO;
	
	@Autowired
	DepartmentDtoToDepartment toDep;
	
	@GetMapping
	public ResponseEntity<List<DepartmentDto>> getDepartments() {
		return new ResponseEntity<>(toDTO.convert(dser.findAllActive()), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<DepartmentDto> getDepartment(@PathVariable long id) {
		return new ResponseEntity<DepartmentDto>(toDTO.convert(dser.getOne(id)), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<?> saveDepartmant(@Validated @RequestBody DepartmentDto departmentDto , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		Department d = new Department();
		d = toDep.convert(departmentDto);
		return new ResponseEntity<DepartmentDto>(toDTO.convert(dser.save(d)), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> editDepartment(@Validated @RequestBody DepartmentDto departmentDto , Errors errors) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		Department d = new Department();
		d = toDep.convert(departmentDto);
		return new ResponseEntity<DepartmentDto>(toDTO.convert(dser.save(d)), HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteDepartment(@PathVariable long id) {
		dser.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<String> changeActive(@PathVariable("id") Long id) {
		Department d = dser.getOne(id);
		if (d == null) {
			return new ResponseEntity<String> ("There is no Department with id: " + id, HttpStatus.BAD_REQUEST);
		}
		d.setActive(!d.getActive());
		dser.save(d);
		return new ResponseEntity<String> ("Status changed", HttpStatus.OK);
	}
	

}
