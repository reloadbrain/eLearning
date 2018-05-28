package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PreExamObligationTypeDTO;
import eLearning.sf.model.PreExamObligationType;
import eLearning.sf.service.PreExamObligationService;

@Component
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
		//Set<PreExamObligation> peo =  peos.findByTypeId(arg0.getPreExamObligationTypeId()).stream().collect(Collectors.toSet());
		//p.setPreExamObligations(peo); 
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
