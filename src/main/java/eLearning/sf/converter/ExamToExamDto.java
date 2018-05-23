package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamDto;
import eLearning.sf.model.Exam;

@Component
public class ExamToExamDto implements Converter<Exam, ExamDto> {

	@Override
	public ExamDto convert(Exam exam) {
		ExamDto examDto = new ExamDto();
		examDto.setActive(exam.getActive());
		examDto.setCourseId(exam.getCourse().getCourseId());
		examDto.setDate(exam.getDate());
		examDto.setExamId(exam.getExamId());
		examDto.setExamTermId(exam.getExamTerm().getExamTermId());

		return examDto;
	}

	public List<ExamDto> convert(List<Exam> exams) {
		List<ExamDto> retVal = new ArrayList<>();
		for (Exam exam : exams) {
			retVal.add(convert(exam));
		}

		return retVal;
	}
}
