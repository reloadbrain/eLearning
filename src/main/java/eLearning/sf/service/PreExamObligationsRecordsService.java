package eLearning.sf.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.repository.PreExamObligationsRecordsRepository;
import eLearning.sf.serviceInterface.PreExamObligationsRecordsServiceInterface;

public class PreExamObligationsRecordsService implements PreExamObligationsRecordsServiceInterface{

	@Autowired
	PreExamObligationsRecordsRepository jpa;
	
	@Override
	public PreExamObligationsRecords getOne(Long id) {
		// TODO Auto-generated method stub
		return jpa.getOne(id);
	}

	@Override
	public List<PreExamObligationsRecords> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public PreExamObligationsRecords save(PreExamObligationsRecords preExamObligationsRecords) {
		// TODO Auto-generated method stub
		return jpa.save(preExamObligationsRecords);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpa.deleteById(id);
	}

	@Override
	public Set<PreExamObligationsRecords> findByPreExamObligationId(Long id) {
		return jpa.findByPreexamobligationid(id);
	}



	
	
}
