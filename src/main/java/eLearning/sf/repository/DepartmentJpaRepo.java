package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Department;


public interface DepartmentJpaRepo extends JpaRepository<Department, Long> {

	List<Department> findAllByActiveTrue();
	
}
