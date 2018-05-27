package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.PreExamObligationType;

public interface PreExamObligationTypeRepository extends JpaRepository<PreExamObligationType, Long> {
	
	List<PreExamObligationType> findAllByActiveTrue();
}
