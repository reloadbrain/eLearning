package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamStudentRecordsDto;
import eLearning.sf.model.ExamStudentRecords;

@Component
public class StudentRecordsToStudentRecordsDto implements Converter<ExamStudentRecords, ExamStudentRecordsDto> {

	@Override
	public ExamStudentRecordsDto convert(ExamStudentRecords studentRecords) {
		ExamStudentRecordsDto studentRecordsDto = new ExamStudentRecordsDto();
		studentRecordsDto.setExamId(studentRecords.getExam().getExamId());
		studentRecordsDto.setStudentFirstName(studentRecords.getStudent().getUser().getFirstName());
		studentRecordsDto.setStudentLastName(studentRecords.getStudent().getUser().getLastName());
		studentRecordsDto.setStudentTranscriptNumber(studentRecords.getStudent().getTranscriptNumber());
		studentRecordsDto.setExamRecordsId(studentRecords.getExamRecordsId());
		studentRecordsDto.setGrade(studentRecords.getGrade());
		studentRecordsDto.setExamDate(studentRecords.getExam().getDate());
		studentRecordsDto.setPassed(studentRecords.isPassed());
		studentRecordsDto.setStudentId(studentRecords.getStudent().getStudentId());
		studentRecordsDto.setPoints(studentRecords.getPoints());
		studentRecordsDto.setCourseId(studentRecords.getExam().getCourse().getCourseId());

		return studentRecordsDto;
	}

	public List<ExamStudentRecordsDto> convert(List<ExamStudentRecords> studentRecords) {
		List<ExamStudentRecordsDto> retVal = new ArrayList<>();
		for (ExamStudentRecords record : studentRecords) {
			retVal.add(convert(record));
		}

		return retVal;
	}
}
