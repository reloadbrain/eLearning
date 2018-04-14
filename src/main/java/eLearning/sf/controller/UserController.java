package eLearning.sf.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller(value = "/api/user")
public class UserController {

	
	@GetMapping(value = "/sign-up")
	public ResponseEntity<?> signUp() {
		
		return new ResponseEntity<String>("", HttpStatus.OK);
	}
	
	
}
