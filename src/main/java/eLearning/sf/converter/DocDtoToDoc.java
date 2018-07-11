package eLearning.sf.converter;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.EDocumentDTO;
import eLearning.sf.model.EDocument;
import eLearning.sf.serviceInterface.EDocumentServiceInterface;

@Component
public class DocDtoToDoc implements Converter<EDocumentDTO, EDocument> {

	@Autowired
	private EDocumentServiceInterface eDocI;
	
	@Override
	public EDocument convert(EDocumentDTO eDto) {
		Optional<EDocument> eDoc = eDocI.findById(eDto.getEDocumentId());
		if (eDoc.isPresent()) {
			return eDoc.get();
		}
		return null;
	}
}
