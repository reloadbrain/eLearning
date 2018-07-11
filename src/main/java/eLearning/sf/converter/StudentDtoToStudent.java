package eLearning.sf.converter;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.StudentDto;
import eLearning.sf.model.Course;
import eLearning.sf.model.Role;
import eLearning.sf.model.Student;
import eLearning.sf.service.CourseService;
import eLearning.sf.serviceInterface.IUserService;

@Component
public class StudentDtoToStudent implements Converter<StudentDto, Student> {

	@Autowired
	IUserService userService;
	
	
	@Autowired
	CourseService courseService;
	
//	@Autowired
//	DepartemenetSerice
//	Filip da uradi

	@Override
	public Student convert(StudentDto studentDto) {
		Student student = new Student();
		student.setActive(studentDto.getActive());
		student.setUser(userService.getOne(studentDto.getUserId()));
		student.setTranscriptNumber(studentDto.getTranscriptNumber());
		student.setYear(studentDto.getYear());
//		student.setDepartment(department);
		
//		if (!userDto.getRoleId().isEmpty()) {
//			for (Long id: userDto.getRoleId()) {
//				Optional<Role> role = iRoleService.getOne(id);
//				if (role.isPresent()) {
//					user.getRoles().add(role.get());
//				}else if(!role.isPresent()) {
//					log.error("There is no role with id: {}", id);
//				}
//			}
//		}
		
		
//		if (!studentDto.getCourseId().isEmpty()) {
//			for (Long id: studentDto.getCourseId()) {
//				Course course = courseService.getOne(id);
//				if (course.isPresent()) {
//					user.getRoles().add(course.get());
//				}else if(!course.isPresent()) {
//					log.error("There is no role with id: {}", id);
//				}
//			}
//		}
		
		return student;
	}
}
