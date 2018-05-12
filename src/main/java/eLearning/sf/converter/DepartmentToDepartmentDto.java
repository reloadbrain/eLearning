package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.DepartmentDto;
import eLearning.sf.model.Department;

@Component
public class DepartmentToDepartmentDto implements Converter<Department, DepartmentDto> {

	@Override
	public DepartmentDto convert(Department department) {
		DepartmentDto departmentDto = new DepartmentDto();

		departmentDto.setActive(department.getActive());
		departmentDto.setDepartmentId(department.getDepartmentId());
		departmentDto.setName(department.getName());

		return departmentDto;
	}

	public List<DepartmentDto> convert(List<Department> departments) {

		List<DepartmentDto> retVal = new ArrayList<>();

		for (Department d : departments) {
			retVal.add(convert(d));
		}

		return retVal;
	}

}
