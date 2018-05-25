package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ProfessorTypeDTO;
import eLearning.sf.model.ProfessorType;

@Component
public class ProfessorTypeToProfessorTypeDTO implements Converter<ProfessorType, ProfessorTypeDTO>{

	@Override
	public ProfessorTypeDTO convert(ProfessorType professorType) {
		
		ProfessorTypeDTO professorTypeDTO = new ProfessorTypeDTO();
		professorTypeDTO.setProfessorTypeId(professorType.getTypeId());
		professorTypeDTO.setName(professorType.getName());
		professorTypeDTO.setActive(professorType.getActive());
		
		return professorTypeDTO;
	}


	public List<ProfessorTypeDTO> convert(List<ProfessorType> professorTypeList) {

		List<ProfessorTypeDTO> retVal = new ArrayList<>();
		for (ProfessorType professorType : professorTypeList) {
			retVal.add(convert(professorType));
		}
		return retVal;
	}
}
