package eLearning.sf.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import eLearning.sf.model.User;
import eLearning.sf.repository.UserJpaRepo;
import eLearning.sf.serviceInterface.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserJpaRepo userJpaRepo;

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
}
