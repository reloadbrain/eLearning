package eLearning.sf.converter;


import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ProfessorTypeDTO;
import eLearning.sf.model.ProfessorType;

@Component
public class ProfessorTypeDTOtoProfessorType implements Converter<ProfessorTypeDTO , ProfessorType>{
	
	@Override
	public ProfessorType convert(ProfessorTypeDTO professorTypeDTO) {
		
		ProfessorType professorType = new ProfessorType();
		professorType.setTypeId(professorTypeDTO.getProfessorTypeId());
		professorType.setName(professorTypeDTO.getName());
		professorType.setActive(professorTypeDTO.getActive());
		
		return professorType;
	}

}
