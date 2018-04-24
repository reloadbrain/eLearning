package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Exam;

public interface ExamServiceInterface {

	public Exam getOne(Long id);

	public List<Exam> findAll();

	public Exam save(Exam exam);

	public void delete(Long id);
}
