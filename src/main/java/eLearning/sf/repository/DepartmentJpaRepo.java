package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Department;

public interface DepartmentJpaRepo extends JpaRepository<Department, Long> {

}
