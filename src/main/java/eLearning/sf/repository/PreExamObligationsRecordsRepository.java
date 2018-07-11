package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eLearning.sf.model.PreExamObligationsRecords;

public interface PreExamObligationsRecordsRepository  extends JpaRepository<PreExamObligationsRecords, Long>{
	
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByDateAsc(Long id);
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByDateDesc(Long id);
	
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByStudentUserLastNameAsc(Long id);
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByStudentUserLastNameDesc(Long id);
	
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByStudentTranscriptNumberAsc(Long id);
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByStudentTranscriptNumberDesc(Long id);
	
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByPointsAsc(Long id);
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByPointsDesc(Long id);
	
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByPassedAsc(Long id);
	List<PreExamObligationsRecords> findAllByPreExamObligationPreExamOIdOrderByPassedDesc(Long id);
	
	List<PreExamObligationsRecords> findAllByStudentStudentIdAndPreExamObligationCourseCourseIdAndActiveTrue(Long sId, Long cId);
	PreExamObligationsRecords findByPreExamObligationPreExamOIdAndStudentStudentIdAndActiveTrue(Long oId, Long uId);
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
