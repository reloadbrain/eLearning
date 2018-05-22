package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.PreExamObligationType;
import eLearning.sf.repository.PreExamObligationTypeRepository;
import eLearning.sf.serviceInterface.PreExamObligationTypeServiceInterface;

@Service
public class PreExamObligationTypeService implements PreExamObligationTypeServiceInterface{

	@Autowired
	PreExamObligationTypeRepository jpa;
	
	@Override
	public PreExamObligationType getOne(Long id) {
		// TODO Auto-generated method stub
		return jpa.getOne(id);
	}

	@Override
	public List<PreExamObligationType> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public PreExamObligationType save(PreExamObligationType preExamObligationType) {
		// TODO Auto-generated method stub
		return jpa.save(preExamObligationType);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpa.deleteById(id);
	}

	
	
}
