package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;

import eLearning.sf.dto.PreExamObligationDTO;
import eLearning.sf.dto.PreExamObligationTypeDTO;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationType;
import eLearning.sf.service.PreExamObligationService;

public class PreExamObligationTypeDTOtoPreExamObligation implements Converter <PreExamObligationTypeDTO, PreExamObligationType> {

	@Autowired
	PreExamObligationService peos;
	
	@Override
	public PreExamObligationType convert(PreExamObligationTypeDTO arg0) {
		PreExamObligationType p = new PreExamObligationType();
		if(arg0.getPreExamObligationTypeId() != null) {
			p.setPreExamOTypeId(arg0.getPreExamObligationTypeId());
		}
		p.setName(arg0.getName());
		p.setActive(arg0.getActive());
		p.setPreExamObligations(peos.findByTypeId(arg0.getPreExamObligationTypeId())); 
		return p;
	}
	
	public List<PreExamObligationType> convert(List<PreExamObligationTypeDTO> argS) {

		List<PreExamObligationType> retVal = new ArrayList<>();

		for (PreExamObligationTypeDTO p : argS) {
			retVal.add(convert(p));
		}

		return retVal;
	}

}
