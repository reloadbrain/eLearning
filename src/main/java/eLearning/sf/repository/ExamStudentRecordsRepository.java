package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.ExamStudentRecords;

public interface ExamStudentRecordsRepository extends JpaRepository<ExamStudentRecords, Long> {

	// nadji sve za jednog studenta
	// nadji za odredjeni exam

//	List<ExamStudentRecords> findAllByStudentUserUsernameContainingAndActiveTrue(String studentUsername);

	List<ExamStudentRecords> findAllByStudentUserUsernameContainingAndExamCourseCourseIdAndActiveTrue(String studentUsername,
			Long courseId);
}
