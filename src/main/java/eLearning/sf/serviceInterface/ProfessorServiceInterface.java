package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Professor;

public interface ProfessorServiceInterface {

	
	public Professor getOne(Long id);

	public List<Professor> findAll();

	public Professor save(Professor professor);

	public void delete(Long id);
}
