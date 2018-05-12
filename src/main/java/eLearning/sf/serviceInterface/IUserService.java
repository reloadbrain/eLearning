package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Optional;

import eLearning.sf.model.User;

public interface IUserService {

	Optional<User> findByUsername(String username); 
	User save(User user);
	List<User> getAllUsers();
}
