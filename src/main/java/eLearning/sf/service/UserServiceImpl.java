package eLearning.sf.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.User;
import eLearning.sf.repository.UserJpaRepo;
import eLearning.sf.serviceInterface.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserJpaRepo userJpaRepo;
	
	@Override
	public Optional<User> findByUsername(String username) {
		return userJpaRepo.findByUsername(username);
	}

	@Override
	public User save(User user) {
		return userJpaRepo.save(user); 
	}

	@Override
	public List<User> getAllUsers() {
		return userJpaRepo.findAll();
	}
	
}
