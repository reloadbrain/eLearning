<<<<<<< HEAD
package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Professor;
import eLearning.sf.repository.ProfessorRepository;
import eLearning.sf.serviceInterface.ProfessorServiceInterface;

@Service
public class ProfessorService implements ProfessorServiceInterface {
	
	@Autowired
	ProfessorRepository professorRepository;

	@Override
	public Professor getOne(Long id) {
		 return professorRepository.getOne(id);
	}

	@Override
	public List<Professor> findAll() {
		// TODO Auto-generated method stub
		return professorRepository.findAll();
	}

	@Override
	public Professor save(Professor professor) {
		// TODO Auto-generated method stub
		return professorRepository.save(professor);
	}

	@Override
	public void delete(Long id) {
		professorRepository.deleteById(id);
		
	}

}
=======
package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.Professor;
import eLearning.sf.repository.ProfessorRepository;
import eLearning.sf.serviceInterface.ProfessorServiceInterface;

public class ProfessorService implements ProfessorServiceInterface {
	
	@Autowired
	ProfessorRepository professorRepository;

	@Override
	public Professor getOne(Long id) {
		 return professorRepository.getOne(id);
	}

	@Override
	public List<Professor> findAll() {
		// TODO Auto-generated method stub
		return professorRepository.findAll();
	}

	@Override
	public Professor save(Professor professor) {
		// TODO Auto-generated method stub
		return professorRepository.save(professor);
	}

	@Override
	public void delete(Long id) {
		professorRepository.deleteById(id);
		
	}

}
>>>>>>> f2c7db3e20fe1ab85f20d8f184b015bbf0156f40
