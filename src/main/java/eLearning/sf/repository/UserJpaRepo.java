package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.User;

public interface UserJpaRepo extends JpaRepository<User, Long> {

	User findByUsername(String username);
	
}
