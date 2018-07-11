package eLearning.sf.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eLearning.sf.model.User;

public interface UserJpaRepo extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);
	
	Optional<User> findByUsernameAndActiveTrue(String username);
	
	@Query("select u from User u where u.active = true and "
			+ "(u.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.username like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.phoneNumber like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.address like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.dateOfBirth like (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<User> findAllActiveByPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);
	
	@Query("select u from User u where u.active = false and "
			+ "(u.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.username like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.phoneNumber like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.address like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.dateOfBirth like (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<User> findAllNonActiveByPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);
	
	
	@Query("select u from User u where "
			+ "u.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.username like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.phoneNumber like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.address like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.dateOfBirth like (CONCAT( '%', LOWER(:searchTerm), '%'))")
	Page<User> findAllPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);

	
}
