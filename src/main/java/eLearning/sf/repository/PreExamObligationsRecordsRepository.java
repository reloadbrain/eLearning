package eLearning.sf.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eLearning.sf.model.Course;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.Student;
import eLearning.sf.model.User;

public interface PreExamObligationsRecordsRepository  extends JpaRepository<PreExamObligationsRecords, Long>{
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOId(Long id);
	List<PreExamObligationsRecords> findAllByStudentStudentIdAndPreExamObligationCourseCourseId(Long sId, Long cId);
	
	@Query("select p from PreExamObligationsRecords p where"
			+ " p.date like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.preExamObligation.name like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.preExamObligation.type.name like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.preExamObligation.course.name like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.student.user.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.student.user.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " p.student.transcriptNumber like (CONCAT( '%', LOWER(:searchTerm), '%'))")
	Page<PreExamObligationsRecords> findAllPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);
	
	/*
	@Query("select u from User u where "
			+ "u.firstName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.lastName like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.username like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.phoneNumber like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.address like (CONCAT( '%', LOWER(:searchTerm), '%')) or"
			+ " u.dateOfBirth like (CONCAT( '%', LOWER(:searchTerm), '%'))")
	Page<User> findAllPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);
	*/
}
