package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Payment;
import eLearning.sf.model.User;

public interface IUserService {

	User getOne(Long id);

	Optional<User> findByUsername(String username);

	User save(User user);

	Page<User> listAllByPageActive(String searchTerm, Pageable pageable);
	
	Page<User> listAllByPageNotActive(String searchTerm, Pageable pageable);
	
	Page<User> listAllByPage(String searchTerm, Pageable pageable);
	
	User editUser(User u, UserDto userDto);
	
	public List<User> findAll();
	
	boolean isUsernameUnique(String username, String edit, String oldUsername);
}
