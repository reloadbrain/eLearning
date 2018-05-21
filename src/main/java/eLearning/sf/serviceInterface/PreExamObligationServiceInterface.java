package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Set;

import eLearning.sf.model.PreExamObligation;

public interface PreExamObligationServiceInterface {
	
	public PreExamObligation getOne(Long Id);

	public List<PreExamObligation> findAll();

	public PreExamObligation save(PreExamObligation preExamObligation);

	public void delete(Long id);
	
	public Set<PreExamObligation> findByTypeId(Long id);

}
