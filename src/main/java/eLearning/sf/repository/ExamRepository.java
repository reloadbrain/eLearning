package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eLearning.sf.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {

	@Query("SELECT e.examId, e.active, e.date, e.course.courseId, e.examTerm.examTermId FROM Exam e, Course c WHERE (e.active = true AND e.course.courseId = c.courseId) AND ("
			+ "c.name LIKE (CONCAT( '%', LOWER(:searchTerm), '%')) OR "
			+ "e.date LIKE (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<Exam> findAllPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);

	@Query("SELECT e.examId, e.active, e.date, e.course.courseId, e.examTerm.examTermId FROM Exam e, Course c, ExamTerm t WHERE (e.active = true AND "
			+ "e.course.courseId = c.courseId AND e.examTerm.examTermId = t.examTermId AND t.month = :termMonth) AND ("
			+ "c.name LIKE (CONCAT( '%', LOWER(:searchTerm), '%')) OR "
			+ "e.date LIKE (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<Exam> findAllByTermMonthPageAndSearch(@Param("termMonth") int termMonth,
			@Param("searchTerm") String searchTerm, Pageable pageable);

	@Query("SELECT e.examId, e.active, e.date, e.course.courseId, e.examTerm.examTermId FROM Exam e, Course c, ExamTerm t, User u, Professor p join p.courses pc WHERE (e.active = true AND "
			+ "e.course.courseId = c.courseId AND e.examTerm.examTermId = t.examTermId AND t.month = :termMonth AND pc.courseId = e.course.courseId AND u.username = :professorUsername AND u.userId = p.user.userId) AND ("
			+ "c.name LIKE (CONCAT( '%', LOWER(:searchTerm), '%')) OR "
			+ "e.date LIKE (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<Exam> findAllByTermMonthAndProfessorPageAndSearch(@Param("professorUsername") String professorUsername,
			@Param("termMonth") int termMonth, @Param("searchTerm") String searchTerm, Pageable pageable);

	List<Exam> findAllByCourseProfessorsUserUsernameContaining(@Param("professorUsername") String professorUsername);
	
}
