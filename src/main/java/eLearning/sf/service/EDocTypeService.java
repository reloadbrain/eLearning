package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.EDocType;
import eLearning.sf.repository.EDocTypeRepository;
import eLearning.sf.serviceInterface.EDocTypeServiceInterface;

public class EDocTypeService implements EDocTypeServiceInterface {

	@Autowired
	EDocTypeRepository jpa;

	@Override
	public EDocType getOne(Long id) {
		// TODO Auto-generated method stub
		return jpa.getOne(id);
	}

	@Override
	public List<EDocType> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public EDocType save(EDocType eDocType) {
		// TODO Auto-generated method stub
		return jpa.save(eDocType);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpa.deleteById(id);
	}
	
	
}
