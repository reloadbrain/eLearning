package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamDto;
import eLearning.sf.model.Exam;

@Component
public class ExamDtoToExam implements Converter<ExamDto, Exam> {

	@Override
	public Exam convert(ExamDto examDto) {
		// Exam exam = new Exam();
		// exam.setActive(examDto.getActive());
		// exam.setDate(examDto.getDate());
		// exam.setExamId(examDto.getExamId());
		// exam.setExamTerm(examTerm);
		// exam.setCourse(course);
		return new Exam();
	}
}
