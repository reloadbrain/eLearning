package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.User;

public interface PreExamObligationsRecordsServiceInterface {

	public PreExamObligationsRecords getOne(Long id);

	public List<PreExamObligationsRecords> findAll();

	public PreExamObligationsRecords save(PreExamObligationsRecords preExamObligationsRecords);

	public void delete(Long id);
	
	public List<PreExamObligationsRecords> findByPreExamObligationId (Long id , String sortPar, String sortDir);
	
	public List<PreExamObligationsRecords> findByStudentIdAndCurseId(String username, Long cId );
	
	public List<PreExamObligationsRecords> findByStudentIdAndCurseIdPassed(String username, Long cId );
	
	Page<PreExamObligationsRecords> listAllByPage(String searchTerm, Pageable pageable);
	
	public PreExamObligationsRecords findByObligationIdAndStudentId(Long oId, Long sId);
	
}
