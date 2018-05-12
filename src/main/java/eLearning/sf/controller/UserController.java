package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.UserDtoToUser;
import eLearning.sf.converter.UserToUserDto;
import eLearning.sf.dto.UserDto;
import eLearning.sf.serviceInterface.IUserService;

@Controller
@RequestMapping(value = "/api/users")
public class UserController {

	@Autowired
	private IUserService iUserService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserDtoToUser userDtoToUser;
	
	@Autowired
	private UserToUserDto userToUserDto;
	
	@PostMapping(value = "/sign-up")
	public ResponseEntity<String> signUp(@RequestBody UserDto userDto) {
		userDto.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
		iUserService.save(userDtoToUser.convert(userDto));
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}
	
	@GetMapping
	//@PreAuthorize("hasRole('ROLE_ADMIN')") - provera uloga
	public ResponseEntity<List<UserDto>> getAllUsers() {
		return new ResponseEntity<List<UserDto>> (userToUserDto.convert(iUserService.getAllUsers()), HttpStatus.OK);
	}
	
}
