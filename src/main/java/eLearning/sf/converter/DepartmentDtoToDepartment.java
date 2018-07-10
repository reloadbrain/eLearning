package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.DepartmentDto;
import eLearning.sf.model.Department;

@Component
public class DepartmentDtoToDepartment implements Converter<DepartmentDto, Department>{

	@Override
	public Department convert(DepartmentDto depDto) {
		
		Department dep = new Department();
		if (depDto.getDepartmentId() != null) {
			dep.setDepartmentId(depDto.getDepartmentId());
		}
		
		dep.setActive(depDto.getActive());
		dep.setName(depDto.getName());
		return dep;
	}
	
	public List<Department> convert(List<DepartmentDto> depsDto){
		
		List<Department> retVal = new ArrayList<>();
		
		for (DepartmentDto departmentDto : depsDto) {
			retVal.add(convert(departmentDto));
		}
		return retVal;
	}
	

}
