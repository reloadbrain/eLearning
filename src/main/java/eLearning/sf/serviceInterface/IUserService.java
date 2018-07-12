package eLearning.sf.serviceInterface;

import java.util.Map;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Role;
import eLearning.sf.model.Payment;
import eLearning.sf.model.User;

public interface IUserService {

	User getOne(Long id);

	Optional<User> findByUsername(String username);
	
	Optional<User> findByUsernameAndActiveTrue(String username);

	User save(User user);

	Page<User> listAllByPageActive(String searchTerm, Pageable pageable);
	
	Page<User> listAllByPageNotActive(String searchTerm, Pageable pageable);
	
	Page<User> listAllByPage(String searchTerm, Pageable pageable);
	
	User editUser(User u, UserDto userDto, User principal);
	
	public List<User> findAll();
	
	boolean isUsernameUnique(String username, String edit, String oldUsername);
	
	//Create student, professor or administrator depending on user roles
	void createUserAccounts(Set<Role> roles, User u);
	
	boolean isUserLoggedInById(Long id, String principal);
	
	ResponseEntity<?> editUser(UserDto userDto, Long id, String principal);
	
	ResponseEntity<String> editUserPassword(Long id, Map<String, Object> rData, String principal);
	
	boolean isUserAdmin(User u);
	
	boolean isUserStudent(User u);
}
