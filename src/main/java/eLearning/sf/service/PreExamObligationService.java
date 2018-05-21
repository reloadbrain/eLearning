package eLearning.sf.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.PreExamObligation;
import eLearning.sf.repository.PreExamObligationRepository;
import eLearning.sf.serviceInterface.PreExamObligationServiceInterface;

public class PreExamObligationService implements PreExamObligationServiceInterface {

	@Autowired
	PreExamObligationRepository jpaPreExamObligationRepository;
	
	@Override
	public PreExamObligation getOne(Long Id) {
		// TODO Auto-generated method stub
		return jpaPreExamObligationRepository.getOne(Id);
	}

	@Override
	public List<PreExamObligation> findAll() {
		// TODO Auto-generated method stub
		return jpaPreExamObligationRepository.findAll();
	}

	@Override
	public PreExamObligation save(PreExamObligation preExamObligation) {
		// TODO Auto-generated method stub
		return jpaPreExamObligationRepository.save(preExamObligation);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpaPreExamObligationRepository.deleteById(id);
	}

	@Override
	public Set<PreExamObligation> findByTypeId(Long id) {
		return jpaPreExamObligationRepository.findByPreexamotypeid(id);
	}

	
}
