package eLearning.sf.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import eLearning.sf.converter.UserToUserDto;
import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Professor;
import eLearning.sf.model.Role;
import eLearning.sf.model.Student;
import eLearning.sf.model.User;
import eLearning.sf.repository.UserJpaRepo;
import eLearning.sf.serviceInterface.IRoleService;
import eLearning.sf.serviceInterface.IUserService;
import eLearning.sf.serviceInterface.ProfessorServiceInterface;
import eLearning.sf.serviceInterface.StudentServiceInterface;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserJpaRepo userJpaRepo;

	@Autowired
	private IUserService iUserService;

	@Autowired
	private StudentServiceInterface iStudentService;

	@Autowired
	private ProfessorServiceInterface iProfService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	IRoleService iRoleService;
	
	@Autowired
	private UserToUserDto userToUserDto;

	@Override
	public User getOne(Long id) {
		Optional<User> u = userJpaRepo.findById(id);
		if (u.isPresent()) {
			return u.get();
		}
		return null;
	}

	@Override
	public Optional<User> findByUsername(String username) {
		return userJpaRepo.findByUsername(username);
	}

	@Override
	public User save(User user) {
		return userJpaRepo.save(user);
	}

	@Override
	public Page<User> listAllByPageActive(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllActiveByPageAndSearch(searchTerm, pageable);
	}

	@Override
	public Page<User> listAllByPageNotActive(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllNonActiveByPageAndSearch(searchTerm, pageable);
	}

	@Override
	public Page<User> listAllByPage(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllPageAndSearch(searchTerm, pageable);
	}

	@Override
	public boolean isUsernameUnique(String username, String edit, String oldUsername) {
		Optional<User> u = iUserService.findByUsername(oldUsername);
		if (edit.equals("add")) {
			Optional<User> userAdd = iUserService.findByUsername(username);
			if (!userAdd.isPresent()) {
				return true;
			}
			return false;
		}
		if (edit.equals("edit")) {
			if (!u.isPresent()) {
				return true;
			} else if (u.isPresent()) {
				List<User> users = userJpaRepo.findAll();
				users.remove(u.get());
				for (User us : users) {
					if (us.getUsername().equals(username)) {
						return false;
					}
				}
				return true;
			}
		}
		return false;
	}

	@Override
	public void createUserAccounts(Set<Role> roles, User u) {

		if (!roles.isEmpty()) {
			for (Role r : roles) {
				if (r.getName().equalsIgnoreCase("PROFESSOR")) {
					Professor p = new Professor();
					p.setUser(u);
					iProfService.save(p);
				}
				if (r.getName().equalsIgnoreCase("STUDENT")) {
					Student s = new Student();
					s.setUser(u);
					iStudentService.save(s);
				}
			}
		}
	}

	@Override
	public Optional<User> findByUsernameAndActiveTrue(String username) {
		return userJpaRepo.findByUsernameAndActiveTrue(username);
	}

	@Override
	public boolean isUserLoggedInById(Long id, String principal) {
		Optional<User> u = userJpaRepo.findById(id);
		if (u.isPresent() && u.get().getUsername().equals(principal)) {
			return true;
		}
		return false;
	}
	
	@Override
	public boolean isUserAdmin(User u) {
		if(!u.getRoles().isEmpty()) {
			for(Role r: u.getRoles()) {
				if (r.getName().equals("ADMIN")) return true;
			}
		}
		return false;
	}
	
	@Override
	public boolean isUserStudent(User u) {
		if(!u.getRoles().isEmpty()) {
			for(Role r: u.getRoles()) {
				if (r.getName().equals("STUDENT")) return true;
			}
		}
		return false;
	}

	@Override
	public ResponseEntity<String> editUserPassword(Long id, Map<String, Object> rData, String principal) {
		User dbUser = iUserService.getOne(id);
		
		
		if (dbUser == null) {
			log.error("There is no user with given id");
			return new ResponseEntity<String>("There is no user with given id", HttpStatus.BAD_REQUEST);
		}

		if (!principal.equals(dbUser.getUsername())) {
			log.error("Unauthorized");
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		}
		
		if (!bCryptPasswordEncoder.matches(rData.get("oldPassword").toString(), dbUser.getPassword())) {
			log.error("Incorrect old password");
			return new ResponseEntity<String>("Incorrect password", HttpStatus.OK);
		}
		dbUser.setPassword(bCryptPasswordEncoder.encode(rData.get("newPassword").toString()));
		log.info("Changing password for user: " + dbUser.getUsername());

		iUserService.save(dbUser);
		return new ResponseEntity<String>("Password successfully changed", HttpStatus.OK);
	}

	@Override
	public User editUser(User u, UserDto userDto, User principal) {
		u.setUsername(userDto.getUsername());
		u.setFirstName(userDto.getFirstName());
		u.setAddress(userDto.getAddress());
		u.setDateOfBirth(userDto.getDateOfBirth());
		u.setLastName(userDto.getLastName());
		u.setPhoneNumber(userDto.getPhoneNumber());
		Set<Role> beforeRoles = u.getRoles();
		if(isUserAdmin(principal)) {
			if (!userDto.getRoleId().isEmpty()) {
				u.getRoles().clear();
				for (Long roleid : userDto.getRoleId()) {
					Optional<Role> role = iRoleService.getOne(roleid);
					if (role.isPresent()) {
						u.getRoles().add(role.get());
					} else if (!role.isPresent()) {
						log.error("There is no role with id: {}", roleid);
					}
				}
				if (u.getRoles().isEmpty()) {
					u.setRoles(beforeRoles);
				}
			} else if (userDto.getRoleId().isEmpty()) {
				return null;
			}
		}
		return u;
	}
	
	@Override
	public ResponseEntity<?> editUser(UserDto userDto, Long id, String principal) {
		
		User u = iUserService.getOne(id);
		Optional<User> logged = iUserService.findByUsername(principal);
		User u2;
		if (!logged.isPresent()) {
			return new ResponseEntity<String> ("Unauthorized", HttpStatus.UNAUTHORIZED);
		}
		u2 = logged.get();
		if (u == null) {
			return new ResponseEntity<String> ("There is no user with id: " + id, HttpStatus.BAD_REQUEST);
		}
		if (!principal.equals(u.getUsername()) && !isUserAdmin(u2)) {
				log.error("Unauthorized");
				return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		}
		
		User editedUser = iUserService.editUser(u, userDto, u2);
		if (editedUser == null) {
			return new ResponseEntity<String>("Bad request", HttpStatus.BAD_REQUEST);
		}
		u = iUserService.save(editedUser);
		return new ResponseEntity<UserDto> (userToUserDto.convert(u), HttpStatus.OK);
	}
	
	@Override
	public List<User> findAll() {
		return userJpaRepo.findAll();
	}

}
