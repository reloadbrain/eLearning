package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.EDocType;

public interface EDocTypeServiceInterface {
	
	public EDocType getOne(Long id);

	public List<EDocType> findAll();

	public EDocType save(EDocType eDocType);

	public void delete(Long id);

}
