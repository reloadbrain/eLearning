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
	
	public List<PreExamObligationsRecords> findByPreExamObligationId (Long id);
	
	public List<PreExamObligationsRecords> findByStudentIdAndCurseId(Long sId, Long cId );
	
	Page<PreExamObligationsRecords> listAllByPage(String searchTerm, Pageable pageable);
	
}
