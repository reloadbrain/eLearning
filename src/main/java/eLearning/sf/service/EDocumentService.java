package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.EDocument;
import eLearning.sf.repository.EDocumentRepository;
import eLearning.sf.serviceInterface.EDocumentServiceInterface;

public class EDocumentService implements EDocumentServiceInterface {

	@Autowired
	EDocumentRepository jpa;

	@Override
	public EDocument getOne(Long id) {
		// TODO Auto-generated method stub
		return jpa.getOne(id);
	}

	@Override
	public List<EDocument> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public EDocument save(EDocument eDocument) {
		// TODO Auto-generated method stub
		return jpa.save(eDocument);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpa.deleteById(id);
	}
	
	
	
}
