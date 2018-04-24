package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.ExamTerm;
import eLearning.sf.repository.ExamTermRepository;
import eLearning.sf.serviceInterface.ExamTermServiceInterface;

@Service
public class ExamTermService implements ExamTermServiceInterface {

	@Autowired
	ExamTermRepository examTermRepository;

	@Override
	public ExamTerm getOne(Long id) {
		return examTermRepository.getOne(id);
	}

	@Override
	public List<ExamTerm> findAll() {
		return examTermRepository.findAll();
	}

	@Override
	public ExamTerm save(ExamTerm examTerm) {
		return examTermRepository.save(examTerm);
	}

	@Override
	public void delete(Long id) {
		examTermRepository.deleteById(id);
	}
}
