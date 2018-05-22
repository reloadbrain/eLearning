package eLearning.sf.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.PreExamObligation;


public interface PreExamObligationRepository extends JpaRepository<PreExamObligation, Long> {
	Set<PreExamObligation> findAllByType(Long id);
}
