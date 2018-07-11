package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

	Student getByUserUserId(Long id);
	List<Student> findAllByCoursesCourseId(Long courseId);
	
	Student findByUserUsername(String username);
}
