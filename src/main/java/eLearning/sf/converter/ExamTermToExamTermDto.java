package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamTermDto;
import eLearning.sf.model.ExamTerm;

@Component
public class ExamTermToExamTermDto implements Converter<ExamTerm, ExamTermDto> {

	@Override
	public ExamTermDto convert(ExamTerm examTerm) {
		ExamTermDto examTermDto = new ExamTermDto(examTerm.getExamTermId(), examTerm.getActive(), examTerm.getName());
		return examTermDto;
	}

	public List<ExamTermDto> convert(List<ExamTerm> terms) {

		List<ExamTermDto> retVal = new ArrayList<>();

		for (ExamTerm term : terms) {
			retVal.add(convert(term));
		}

		return retVal;
	}
}
