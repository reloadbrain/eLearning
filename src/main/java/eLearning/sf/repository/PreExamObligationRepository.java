package eLearning.sf.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationType;
import eLearning.sf.model.ProfessorType;


public interface PreExamObligationRepository extends JpaRepository<PreExamObligation, Long> {
	List<PreExamObligation> findAllByTypePreExamOTypeId(Long id);
	List<PreExamObligation> findAllByCourseCourseId(Long id);
}
