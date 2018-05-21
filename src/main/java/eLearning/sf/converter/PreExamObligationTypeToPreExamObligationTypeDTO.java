package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;

import eLearning.sf.dto.PreExamObligationDTO;
import eLearning.sf.dto.PreExamObligationTypeDTO;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationType;

public class PreExamObligationTypeToPreExamObligationTypeDTO implements Converter<PreExamObligationType, PreExamObligationTypeDTO> {

	@Override
	public PreExamObligationTypeDTO convert(PreExamObligationType arg0) {
		PreExamObligationTypeDTO p = new PreExamObligationTypeDTO();
		p.setPreExamObligationTypeId(arg0.getPreExamOTypeId());
		p.setName(arg0.getName());
		p.setActive(arg0.getActive());
		return p;
	}
	
	public List<PreExamObligationTypeDTO> convert(List<PreExamObligationType> argS) {

		List<PreExamObligationTypeDTO> retVal = new ArrayList<>();

		for (PreExamObligationType p : argS) {
			retVal.add(convert(p));
		}

		return retVal;
	}

}
