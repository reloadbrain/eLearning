package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import eLearning.sf.model.EDocument;

public interface EDocumentRepository extends JpaRepository<EDocument, Long> {

}
