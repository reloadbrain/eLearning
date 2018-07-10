package eLearning.sf.service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Exam;
import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.repository.ExamRepository;
import eLearning.sf.repository.ExamStudentRecordsRepository;
import eLearning.sf.repository.ProfessorRepository;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Service
public class ExamService implements ExamServiceInterface {

	@Autowired
	ExamRepository examRepository;
	
	@Autowired
	ExamStudentRecordsRepository recordsRepository;

	@Autowired
	ProfessorRepository professorRepository;

	@Override
	public Exam getOne(Long id) {
		return examRepository.getOne(id);
	}

	@Override
	public List<Exam> findAll() {
		return examRepository.findAll();
	}

	@Override
	public Page<Exam> listAllByPage(String searchTerm, Pageable pageable) {
		return examRepository.findAllPageAndSearch(searchTerm, pageable);
	}

	@Override
	public List<Exam> findAllByProfessorAndCourse(String professorUsername, Long courseId) {
		return examRepository.findAllByCourseProfessorsUserUsernameContainingAndCourseCourseIdAndActiveTrue(professorUsername, courseId);
	}
	
	@Override
	public List<Exam> findAllByCourseAndStudent(Long courseId, String studentUsername) {
		List<Exam> exams = examRepository.findAllByCourseCourseIdAndActiveTrue(courseId);
		Date today = new Date(Calendar.getInstance().getTime().getTime());
//		added one day
		exams = exams.stream().filter(e -> (e.getDate().getTime() + 86400000) > today.getTime()).collect(Collectors.toList());
		
//		get all records by student and course 
		List<ExamStudentRecords> records = recordsRepository.findAllByStudentUserUsernameContainingAndExamCourseCourseIdAndActiveTrue(studentUsername, courseId);
		
		for (ExamStudentRecords record : records) {
			Long id = record.getExam().getExamId();
//			if the exam is applied for you cant apply for it again
//			izbacivanje svih prijavljenih
			exams = exams.stream().filter(e -> !e.getExamId().equals(id)).collect(Collectors.toList());
		}
		
		return exams;
	}

	@Override
	public Exam save(Exam exam) {
		return examRepository.save(exam);
	}

	@Override
	public void delete(Long id) {
		examRepository.deleteById(id);
	}
}
