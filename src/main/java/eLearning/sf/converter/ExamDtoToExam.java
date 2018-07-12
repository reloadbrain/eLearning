package eLearning.sf.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamDto;
import eLearning.sf.model.Exam;
import eLearning.sf.serviceInterface.CourseServiceInterface;
import eLearning.sf.serviceInterface.ExamServiceInterface;

@Component
public class ExamDtoToExam implements Converter<ExamDto, Exam> {

	@Autowired
	private CourseServiceInterface interfaceAsd;
	
	@Override
	public Exam convert(ExamDto examDto) {
		Exam exam = new Exam();
		exam.setActive(examDto.getActive());
		exam.setDate(examDto.getDate());
		exam.setExamId(examDto.getExamId());
		exam.setCourse(interfaceAsd.getOne(examDto.getCourseId()));
		return exam;
	}
}
