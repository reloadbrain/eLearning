package eLearning.sf.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
