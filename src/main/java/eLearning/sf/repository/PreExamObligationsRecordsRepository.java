package eLearning.sf.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Course;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.Student;

public interface PreExamObligationsRecordsRepository  extends JpaRepository<PreExamObligationsRecords, Long>{
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOId(Long id);
	List<PreExamObligationsRecords> findAllByStudentStudentIdAndPreExamObligationCourseCourseId(Long sId, Long cId);
}
