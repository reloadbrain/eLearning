package eLearning.sf.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import org.springframework.web.multipart.MultipartFile;

import eLearning.sf.converter.UserDtoToUser;
import eLearning.sf.converter.UserToUserDto;
import eLearning.sf.dto.PaymentDTO;
import eLearning.sf.dto.UserDto;
import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.IUserService;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping(value = "/api/users")
@Slf4j
public class UserController {

	private static final String DEFAULT_PASS = "default";
	
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

		if (errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		User u = userDtoToUser.convert(userDto);
		
		log.info("Creating new user...");
		u.setPassword(bCryptPasswordEncoder.encode(DEFAULT_PASS));
		iUserService.save(u);
		//creating accounts depending on role
		iUserService.createUserAccounts(u.getRoles(), u);
		log.info("New user created, default password is: {}", DEFAULT_PASS);
		return new ResponseEntity<UserDto>(userToUserDto.convert(u), HttpStatus.OK);
	}
	
	@GetMapping(value = "/is-user-logged-by-username/{id}")
	public ResponseEntity<Boolean> isUserLoggedInByUsername(@PathVariable("id") Long id, Principal principal) {
		return new ResponseEntity<Boolean>(iUserService.isUserLoggedInById(id, principal.getName()), HttpStatus.OK);
	}
	

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
		User u = iUserService.getOne(id);
		if (u == null) {
			return new ResponseEntity<String>("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<UserDto>(userToUserDto.convert(u), HttpStatus.OK);
	}

	@GetMapping(value = "get-by-username/{username}")
	public ResponseEntity<?> getUserByUsername(@PathVariable("username") String username) {
		Optional<User> u = iUserService.findByUsername(username);
		if (!u.isPresent()) {
			return new ResponseEntity<String>("There is no user with username: " + username, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<UserDto>(userToUserDto.convert(u.get()), HttpStatus.OK);
	}

	@GetMapping()
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> getAllUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPage(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>>(userToUserDto.convert(users.getContent()), headers, HttpStatus.OK);
	}
	
	@GetMapping(value = "/users_payments")
	public ResponseEntity<List<UserDto>> getAllUsersForPaymnt() {
		return new ResponseEntity<>(userToUserDto.convert(iUserService.findAll()), HttpStatus.OK);
	}

	@GetMapping(value = "/active")
	public ResponseEntity<?> getAllActiveUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPageActive(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>>(userToUserDto.convert(users.getContent()), headers, HttpStatus.OK);
	}

	@GetMapping(value = "/not-active")
	public ResponseEntity<?> getAllNotActiveUsers(@RequestParam("term") String term, Pageable pageable) {
		Page<User> users = iUserService.listAllByPageNotActive(term, pageable);
		HttpHeaders headers = new HttpHeaders();
		headers.add("total-pages", Integer.toString(users.getTotalPages()));
		return new ResponseEntity<List<UserDto>>(userToUserDto.convert(users.getContent()), headers, HttpStatus.OK);
	}

	@PostMapping(value = "username-unique/{username}")
	public ResponseEntity<Boolean> isUsernameUnique(@PathVariable("username") String username) {
		Optional<User> u = iUserService.findByUsername(username);
		if (u.isPresent()) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@PostMapping(value = "username-unique/{username}/{edit}/{oldUsername}")
	public ResponseEntity<Boolean> isUsernameUnique(@PathVariable("username") String username,
			@PathVariable("edit") String edit, @PathVariable String oldUsername) {
		return new ResponseEntity<Boolean>(iUserService.isUsernameUnique(username, edit, oldUsername), HttpStatus.OK);
	}

	@PutMapping(value = "/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String> changeUserStatus(@PathVariable("id") Long id) {
		User u = iUserService.getOne(id);
		if (u == null) {
			return new ResponseEntity<String>("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		u.setActive(!u.getActive());
		iUserService.save(u);
		return new ResponseEntity<String>("Status changed", HttpStatus.OK);
	}

	@PutMapping(value = "/edit/{id}")
	public ResponseEntity<?> editUser(@Validated @RequestBody UserDto userDto, @PathVariable("id") Long id, Errors errors, Principal principal) {
		if(errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		return iUserService.editUser(userDto, id, principal.getName());
	}
	
 
	@PutMapping(value = "/editPassword/{id}")
	public ResponseEntity<String> editUserPassword(@PathVariable("id") Long id, @RequestBody Map<String, Object> rData, Principal principal) {
		return iUserService.editUserPassword(id, rData, principal.getName());
	}
	public ResponseEntity<?> editUser(@Validated @RequestBody UserDto userDto, @PathVariable("id") Long id,
			Errors errors) {
		User u = iUserService.getOne(id);
		if (u == null) {
			return new ResponseEntity<String>("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		if (errors.hasErrors()) {
			return new ResponseEntity<String>(errors.getAllErrors().toString(), HttpStatus.BAD_REQUEST);
		}
		User editedUser = iUserService.editUser(u, userDto);
		if (editedUser == null) {
			return new ResponseEntity<String>("Bad request", HttpStatus.BAD_REQUEST);
		}
		u = iUserService.save(editedUser);
		return new ResponseEntity<UserDto>(userToUserDto.convert(u), HttpStatus.OK);
	}



}
