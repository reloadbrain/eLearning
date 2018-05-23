package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.DepartmentDto;
import eLearning.sf.model.Department;

@Component
public class DepartmentDtoToDepartment implements Converter<DepartmentDto, Department>{

	@Override
	public Department convert(DepartmentDto depDto) {
		Department dep = new Department();
		dep.setActive(depDto.getActive());
		dep.setName(depDto.getName());
		return dep;
	}
	
	

}
