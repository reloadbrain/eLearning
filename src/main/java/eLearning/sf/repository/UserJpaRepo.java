package eLearning.sf.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.User;

public interface UserJpaRepo extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);
	
}
