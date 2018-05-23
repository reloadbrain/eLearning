package eLearning.sf.converter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ProfessorDTO;
import eLearning.sf.model.Professor;
import eLearning.sf.service.ProfessorTypeService;
import eLearning.sf.serviceInterface.IUserService;

@Component
public class ProfessorDTOtoProfessor implements Converter<ProfessorDTO , Professor> {


	@Autowired
	ProfessorTypeService professorTypeService;
	

	@Autowired
	IUserService userService;
	
	@Override
	public Professor convert(ProfessorDTO professorDTO) {
		
		Professor professor = new Professor();
		professor.setProfessorId(professorDTO.getProfessorId());
		professor.setActive(professorDTO.getActive());
		professor.setType(professorTypeService.getOne(professorDTO.getProfessorTypeId()));
		professor.setUser(userService.getOne(professorDTO.getUserId()));
		// TODO Auto-generated method stub
		return professor;
	}

}
