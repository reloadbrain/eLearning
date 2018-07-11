package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.EDocumentDTO;
import eLearning.sf.model.EDocument;

@Component
public class DocToDocDto implements Converter<EDocument, EDocumentDTO> {

	@Override
	public EDocumentDTO convert(EDocument eDoc) {
		EDocumentDTO eDto = new EDocumentDTO();
		eDto.setEDocumentId(eDoc.getDocId());
		eDto.setNuxeoId(eDoc.getNuxeoId());
		eDto.setStudentId(eDoc.getStudent().getStudentId());
		eDto.setTranscriptNumber(eDoc.getStudent().getTranscriptNumber());
		return eDto;
	}
	
	public List<EDocumentDTO> convert(List<EDocument> eDocs) {

		List<EDocumentDTO> retVal = new ArrayList<>();

		for (EDocument u : eDocs) {
			retVal.add(convert(u));
		}

		return retVal;
	}

}
