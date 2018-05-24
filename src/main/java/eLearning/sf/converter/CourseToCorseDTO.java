package eLearning.sf.converter;


import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.CourseDTO;
import eLearning.sf.model.Course;

@Component
public class CourseToCorseDTO implements Converter<Course , CourseDTO> {

	@Override
	public CourseDTO convert(Course course) {
		CourseDTO courseDTO = new CourseDTO();
		
		courseDTO.setCourseId(course.getCourseId());
		courseDTO.setActive(course.getActive());
		courseDTO.setDepartnebtId(course.getDepartment().getDepartmentId());
		courseDTO.setName(course.getName());
 
		return courseDTO;
	}
	
	public List<CourseDTO> convert(List<Course> courseList) {

		List<CourseDTO> retVal = new ArrayList<>();
		for (Course course : courseList) {
			retVal.add(convert(course));
		}
		return retVal;
	}
	

}
