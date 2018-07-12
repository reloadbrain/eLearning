package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

	// @Query("select u from User u where u.active = true and "
	// + "(u.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
	// + " u.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
	// + " u.username like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
	// + " u.phoneNumber like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
	// + " u.address like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
	// + " u.dateOfBirth like (CONCAT( '%', LOWER(:searchTerm), '%')))")
	// Page<User> findAllStudentsByCourseId(@Param("searchTerm") String searchTerm,
	// Pageable pageable);

	List<Course> findAllByStudentsUserUsername(String username);

	List<Course> findAllByProfessorsUserUsername(String username);

	// }
}
