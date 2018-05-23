package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.Professor;
import eLearning.sf.model.ProfessorType;
import eLearning.sf.repository.ProfessorTypeRepository;
import eLearning.sf.serviceInterface.ProfessorServiceInterface;
import eLearning.sf.serviceInterface.ProfessorTypeServiceInterface;

public class ProfessorTypeService implements ProfessorTypeServiceInterface {

	@Autowired
	ProfessorTypeRepository professorTypeRepository;

	@Override
	public ProfessorType getOne(Long id) {
		// TODO Auto-generated method stub
		return professorTypeRepository.getOne(id);
	}

	@Override
	public List<ProfessorType> findAll() {
		// TODO Auto-generated method stub
		return professorTypeRepository.findAll();
	}

	@Override
	public ProfessorType save(ProfessorType professorType) {
		// TODO Auto-generated method stub
		return professorTypeRepository.save(professorType);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		professorTypeRepository.deleteById(id);
	}
	
	

}
