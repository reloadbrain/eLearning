package eLearning.sf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.IService.IUserService;
import eLearning.sf.model.User;

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
		return new ResponseEntity<String>("", HttpStatus.OK);
	}
	
	
}
