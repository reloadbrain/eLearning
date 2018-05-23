package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.ProfessorType;

public interface ProfessorTypeServiceInterface {
	

	public ProfessorType getOne(Long id);

	public List<ProfessorType> findAll();

	public ProfessorType save(ProfessorType professorType);

	public void delete(Long id);

}
