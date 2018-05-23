package eLearning.sf.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.StudentDto;
import eLearning.sf.model.Student;
import eLearning.sf.serviceInterface.IUserService;

@Component
public class StudentDtoToStudent implements Converter<StudentDto, Student> {

	@Autowired
	IUserService userService;

	@Override
	public Student convert(StudentDto studentDto) {
		Student student = new Student();
		student.setActive(studentDto.getActive());
		student.setUser(userService.getOne(studentDto.getUserId()));
		student.setTranscriptNumber(studentDto.getTranscriptNumber());
		student.setYear(studentDto.getYear());

		return student;
	}
}
