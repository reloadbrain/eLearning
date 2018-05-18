package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.EDocument;

public interface EDocumentServiceInterface {
	
	public EDocument getOne(Long id);

	public List<EDocument> findAll();

	public EDocument save(EDocument eDocument);

	public void delete(Long id);

}
