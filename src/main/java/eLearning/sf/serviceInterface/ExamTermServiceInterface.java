package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.ExamTerm;

public interface ExamTermServiceInterface {

	public ExamTerm getOne(Long id);

	public List<ExamTerm> findAll();

	public ExamTerm save(ExamTerm exam);

	public void delete(Long id);
}
