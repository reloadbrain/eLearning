package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;

import eLearning.sf.dto.ExamDto;
import eLearning.sf.model.Exam;

public class ExamDtoToExam implements Converter<ExamDto, Exam> {

	@Override
	public Exam convert(ExamDto examDto) {
		Exam exam = new Exam();
		exam.setActive(examDto.getActive());
		exam.setDate(examDto.getDate());
		exam.setExamId(examDto.getExamId());
		exam.setExamTerm(examTerm);
		exam.setCourse(course);
	}

}
