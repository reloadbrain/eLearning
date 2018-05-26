package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.PreExamObligationType;


public interface PreExamObligationTypeServiceInterface {
	
	public PreExamObligationType getOne(Long id);

	public List<PreExamObligationType> findAll();

	public PreExamObligationType save(PreExamObligationType preExamObligationType);

	public void delete(Long id);
	
	public List<PreExamObligationType> findeActive();

}
