package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ProfessorDTO;
import eLearning.sf.model.Professor;

@Component
public class ProfessorToProfessorDTO implements Converter<Professor  , ProfessorDTO> {

	@Override
	public ProfessorDTO convert(Professor professor) {
		ProfessorDTO professorDTO = new ProfessorDTO();
		professorDTO.setProfessorId(professor.getProfessorId());
		professorDTO.setProfessorTypeId(professor.getType().getTypeId());
		professorDTO.setActive(professor.getActive());
		professorDTO.setUserId(professor.getUser().getUserId());
		
		return professorDTO;
	}
	
	public List<ProfessorDTO> convert(List<Professor> professorList) {

		List<ProfessorDTO> retVal = new ArrayList<>();
		for (Professor professor : professorList) {
			retVal.add(convert(professor));
		}
		return retVal;
	}

}
