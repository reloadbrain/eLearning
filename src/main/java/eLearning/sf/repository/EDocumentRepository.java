package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import eLearning.sf.model.EDocument;

public interface EDocumentRepository extends JpaRepository<EDocument, Long> {

	List<EDocument> getByStudentStudentId(Long id);
	
}
