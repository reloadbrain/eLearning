package eLearning.sf.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.PreExamObligationsRecords;

public interface PreExamObligationsRecordsRepository  extends JpaRepository<PreExamObligationsRecords, Long>{
	Set<PreExamObligationsRecords> findByPreexamobligationid(Long id);
}
