package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Set;

import eLearning.sf.model.PreExamObligationsRecords;

public interface PreExamObligationsRecordsServiceInterface {

	public PreExamObligationsRecords getOne(Long id);

	public List<PreExamObligationsRecords> findAll();

	public PreExamObligationsRecords save(PreExamObligationsRecords preExamObligationsRecords);

	public void delete(Long id);
	
	public Set<PreExamObligationsRecords> findByPreExamObligationId (Long id);
	
}
