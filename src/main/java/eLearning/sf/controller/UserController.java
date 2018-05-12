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

import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.IUserService;

@Controller
@RequestMapping(value = "/api/users")
public class UserController {

	@Autowired
	private IUserService iUserService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping(value = "/sign-up")
	public ResponseEntity<String> signUp(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		iUserService.save(user);
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}
	
	@GetMapping
	//@PreAuthorize("hasRole('ROLE_ADMIN')") - provera uloga
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<List<User>> (iUserService.getAllUsers(), HttpStatus.OK);
	}
	
}
