package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.PreExamObligation;


public interface PreExamObligationRepository extends JpaRepository<PreExamObligation, Long> {
	List<PreExamObligation> findAllByTypePreExamOTypeId(Long id);
	List<PreExamObligation> findAllByCourseCourseId(Long id);
}
