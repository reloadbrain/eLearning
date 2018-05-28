package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Exam;
import eLearning.sf.repository.ExamRepository;
import eLearning.sf.repository.ProfessorRepository;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Service
public class ExamService implements ExamServiceInterface {

	@Autowired
	ExamRepository examRepository;

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
	public Page<Exam> findAllByTermMonthPageAndSearch(@Param("termMonth") int termMonth,
			@Param("searchTerm") String searchTerm, Pageable pageable) {
		return examRepository.findAllByTermMonthPageAndSearch(termMonth, searchTerm, pageable);
	}

	@Override
	public Page<Exam> findAllByTermMonthAndProfessorPageAndSearch(@Param("professorUsername") String professorUsername,
			@Param("termMonth") int termMonth, @Param("searchTerm") String searchTerm, Pageable pageable) {
		return examRepository.findAllByTermMonthAndProfessorPageAndSearch(professorUsername, termMonth, searchTerm,
				pageable);
	}

	// public Page<Exam>
	// findAllByTermMonthAndProfessorPageAndSearch(@Param("professorId") Long
	// professorId,
	// @Param("termMonth") int termMonth, @Param("searchTerm") String searchTerm,
	// Pageable pageable) {
	// Page<Exam> exams = examRepository.findAllPageAndSearch(searchTerm, pageable);
	// Professor professor = professorRepository.getOne(professorId);
	//
	// List<Exam> retExams = new ArrayList<Exam>();
	// for (Exam exam : exams.getContent()) {
	// if (exam.getExamTerm().getMonth() == termMonth &&
	// exam.getCourse().getProfessors().contains(professor)) {
	// retExams.add(exam);
	// }
	// }
	// Page<Exam> retValue = new PageImpl<>(retExams);
	// return retValue;
	// }

	@Override
	public List<Exam> findAllByProfessor(String professorUsername) {
		return examRepository.findAllByCourseProfessorsUserUsernameContaining(professorUsername);
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
