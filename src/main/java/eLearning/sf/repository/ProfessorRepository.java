package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Professor;


public interface ProfessorRepository extends JpaRepository<Professor, Long> {

}
