package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Exam;
import eLearning.sf.repository.ExamRepository;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Service
public class ExamService implements ExamServiceInterface {

	@Autowired
	ExamRepository examRepository;

	@Override
	public Exam getOne(Long id) {
		return examRepository.getOne(id);
	}

	@Override
	public List<Exam> findAll() {
		return examRepository.findAll();
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
