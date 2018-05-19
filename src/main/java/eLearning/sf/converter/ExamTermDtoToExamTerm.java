package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;

import eLearning.sf.dto.ExamTermDto;
import eLearning.sf.model.ExamTerm;

public class ExamTermDtoToExamTerm implements Converter<ExamTermDto, ExamTerm> {

	@Override
	public ExamTerm convert(ExamTermDto examTermDto) {
		ExamTerm examTerm = new ExamTerm();
		examTerm.setActive(examTermDto.getActive());
		examTerm.setName(examTermDto.getName());
		examTerm.setExamTermId(examTermDto.getExamTermId());
		
		return examTerm;
	}

}
