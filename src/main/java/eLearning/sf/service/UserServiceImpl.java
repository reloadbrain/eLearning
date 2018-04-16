package eLearning.sf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.IService.IUserService;
import eLearning.sf.model.User;
import eLearning.sf.repository.UserJpaRepo;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserJpaRepo userJpaRepo;
	
	@Override
	public User findByUsername(String username) {
		return userJpaRepo.findByUsername(username);
	}

	@Override
	public User save(User user) {
		return userJpaRepo.save(user); 
	}
	
}
