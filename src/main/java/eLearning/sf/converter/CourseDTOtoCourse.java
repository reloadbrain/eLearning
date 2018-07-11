package eLearning.sf.converter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.CourseDTO;
import eLearning.sf.model.Course;
import eLearning.sf.repository.DepartmentJpaRepo;
import eLearning.sf.service.CourseService;


@Component
public class CourseDTOtoCourse implements Converter<CourseDTO, Course> {

	@Autowired
	DepartmentJpaRepo departmentService;
	
	@Override
	public Course convert(CourseDTO courseDTO) {
		Course course = new Course();
		course.setActive(courseDTO.getActive());
		course.setCourseId(courseDTO.getCourseId());
		course.setName(courseDTO.getName());
		course.setDepartment(departmentService.getOne(courseDTO.getDepartmentId()));
		
		return course;
	}

}
