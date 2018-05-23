package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PreExamObligationDTO;
import eLearning.sf.model.PreExamObligation;

@Component
public class PreExamObligationToPreExamObligationDTO implements  Converter<PreExamObligation, PreExamObligationDTO> {

	@Override
	public PreExamObligationDTO convert(PreExamObligation arg0) {
		PreExamObligationDTO pDTO = new PreExamObligationDTO();
		pDTO.setActive(arg0.getActive());
		pDTO.setCourseId(arg0.getCourse().getCourseId());
		pDTO.setPreExamOId(arg0.getPreExamOId());
		pDTO.setName(arg0.getName());
		pDTO.setPreExamOTypeId(arg0.getType().getPreExamOTypeId());
		return pDTO;
	}
	
	public List<PreExamObligationDTO> convert(List<PreExamObligation> argS) {
		
		List<PreExamObligationDTO> retVal = new ArrayList<>();
		for (PreExamObligation p : argS) {
			retVal.add(convert(p));
		}
		return retVal;
	}

}
