package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
	public List<Exam> findAllByProfessorAndCourse(String professorUsername, Long courseId) {
		return examRepository.findAllByCourseProfessorsUserUsernameContainingAndCourseCourseIdAndActiveTrue(professorUsername, courseId);
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
