package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eLearning.sf.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {

	@Query("SELECT e.examId, e.active, e.date, e.course.courseId, e FROM Exam e, Course c WHERE (e.active = true AND e.course.courseId = c.courseId) AND ("
			+ "c.name LIKE (CONCAT( '%', LOWER(:searchTerm), '%')) OR "
			+ "e.date LIKE (CONCAT( '%', LOWER(:searchTerm), '%')))")
	Page<Exam> findAllPageAndSearch(@Param("searchTerm") String searchTerm, Pageable pageable);

	List<Exam> findAllByCourseProfessorsUserUsernameContainingAndCourseCourseIdAndActiveTrue(
			@Param("professorUsername") String professorUsername, @Param("courseId") Long courseId);

	List<Exam> findAllByCourseCourseIdAndActiveTrue(Long courseId);
}
