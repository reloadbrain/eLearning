package eLearning.sf.converter;


import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.CourseDTO;
import eLearning.sf.model.Course;


@Component
public class CourseDTOtoCourse implements Converter<CourseDTO, Course> {

	
	@Override
	public Course convert(CourseDTO courseDTO) {
		Course course = new Course();
		course.setActive(courseDTO.getActive());
		course.setCourseId(courseDTO.getCourseId());
		course.setName(courseDTO.getName());
//		course.setDepartment(courseDTO.getDepartnebtId());
		
		return course;
	}

}
