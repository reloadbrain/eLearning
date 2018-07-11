package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Optional;

import eLearning.sf.model.EDocument;

public interface EDocumentServiceInterface {
	
	EDocument getOne(Long id);

	List<EDocument> findAll();

	EDocument save(EDocument eDocument);

	void delete(Long id);

	Optional<EDocument> findById(Long id);
	
	List<EDocument> getDocsByUserId(Long id);
	
}
