package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.RoleToRoleDto;
import eLearning.sf.dto.RoleDto;
import eLearning.sf.serviceInterface.IRoleService;

@Controller
@RequestMapping(value = "/api/roles")
public class RoleController {

	@Autowired
	private IRoleService iRoleService;
	
	@Autowired
	private RoleToRoleDto roleToRoleDto;
	
	@GetMapping
	public ResponseEntity<List<RoleDto>> getAllRoles() {
		return new ResponseEntity<List<RoleDto>> (roleToRoleDto.convert(iRoleService.getAll()), HttpStatus.OK);
	}
	
}
