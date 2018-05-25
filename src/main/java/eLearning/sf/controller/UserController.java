package eLearning.sf.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import eLearning.sf.converter.UserDtoToUser;
import eLearning.sf.converter.UserToUserDto;
import eLearning.sf.dto.UserDto;
import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.IUserService;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping(value = "/api/users")
@Slf4j
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
	public ResponseEntity<?> signUp(@Validated @RequestBody UserDto userDto, Errors errors) {
		
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		User u = userDtoToUser.convert(userDto);
		log.error(userDto.getDateOfBirth().toString());
		final String defaultPass = "default";
		log.info("Creating new user...");
		u.setPassword(bCryptPasswordEncoder.encode(defaultPass));
		iUserService.save(u);
		log.info("New user created, default password is: {}", defaultPass);
		return new ResponseEntity<UserDto>(userToUserDto.convert(u), HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
		User u = iUserService.getOne(id);
		if(u == null){
			return new ResponseEntity<String> ("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<UserDto> (userToUserDto.convert(u), HttpStatus.OK);
	}
	
	@GetMapping(value = "get-by-username/{username}")
	public ResponseEntity<?> getUserByUsername(@PathVariable("username") String username) {
		Optional<User> u = iUserService.findByUsername(username);
		if(!u.isPresent()){
			return new ResponseEntity<String> ("There is no user with username: " + username, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<UserDto> (userToUserDto.convert(u.get()), HttpStatus.OK);
	}
	
	@GetMapping()
	//@PreAuthorize("hasRole('ROLE_ADMIN')") - provera uloga 
	public ResponseEntity<?> getAllUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPage(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>> (userToUserDto.convert(users.getContent()), headers,HttpStatus.OK);
	}
	
	@GetMapping(value="/active")
	public ResponseEntity<?> getAllActiveUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPageActive(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>> (userToUserDto.convert(users.getContent()), headers,HttpStatus.OK);
	}
	
	@GetMapping(value="/not-active")
	public ResponseEntity<?> getAllNotActiveUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPageNotActive(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>> (userToUserDto.convert(users.getContent()), headers,HttpStatus.OK);
	}
	
	@PostMapping(value="username-unique/{username}")
	public ResponseEntity<Boolean> isUsernameUnique(@PathVariable("username") String username) {
		Optional<User> u = iUserService.findByUsername(username);
		if(u.isPresent()) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<String> changeUserStatus(@PathVariable("id") Long id) {
		User u = iUserService.getOne(id);
		if (u == null) {
			return new ResponseEntity<String> ("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		u.setActive(!u.getActive());
		iUserService.save(u);
		return new ResponseEntity<String> ("Status changed", HttpStatus.OK);
	}
	
}
