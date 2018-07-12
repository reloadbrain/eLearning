package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.PreExamObligation;
import eLearning.sf.repository.PreExamObligationRepository;
import eLearning.sf.serviceInterface.PreExamObligationServiceInterface;

@Service
public class PreExamObligationService implements PreExamObligationServiceInterface {

	@Autowired
	PreExamObligationRepository jpaPreExamObligationRepository;

	@Autowired
	PreExamObligationTypeService peots;

	@Override
	public PreExamObligation getOne(Long id) {
		return jpaPreExamObligationRepository.findByPreExamOId(id);
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
	public List<PreExamObligation> findByTypeId(Long id) {
		return jpaPreExamObligationRepository.findAllByTypePreExamOTypeId(id);
	}

	@Override
	public List<PreExamObligation> findByCourseId(Long id) {
		return jpaPreExamObligationRepository.findAllByCourseCourseIdAndActiveTrue(id);
	}

	@Override
	public PreExamObligation findById(Long id) {
		return jpaPreExamObligationRepository.findByPreExamOId(id);
	}

}
