package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.ExamStudentRecordsDto;
import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.serviceInterface.ExamServiceInterface;
import eLearning.sf.serviceInterface.StudentServiceInterface;

@Component
public class StudentRecordsDtoToStudentRecords implements Converter<ExamStudentRecordsDto, ExamStudentRecords> {

	@Autowired
	private StudentServiceInterface studentService;

	@Autowired
	private ExamServiceInterface examService;

	@Override
	public ExamStudentRecords convert(ExamStudentRecordsDto studentRecordsDto) {
		ExamStudentRecords studentRecords = new ExamStudentRecords();
		studentRecords.setExamRecordsId(studentRecordsDto.getExamRecordsId());
		studentRecords.setGrade(studentRecordsDto.getGrade());
		studentRecords.setPassed(studentRecordsDto.isPassed());
		studentRecords.setPoints(studentRecordsDto.getPoints());
		studentRecords.setActive(studentRecordsDto.getActive());
		studentRecords.setStudent(studentService.findByStudentId(studentRecordsDto.getStudentId()));
		studentRecords.setExam(examService.findByExamId(studentRecordsDto.getExamId()));

		return studentRecords;
	}

	public List<ExamStudentRecords> convert(List<ExamStudentRecordsDto> studentRecordsDto) {
		List<ExamStudentRecords> retVal = new ArrayList<>();
		for (ExamStudentRecordsDto recordDto : studentRecordsDto) {
			retVal.add(convert(recordDto));
		}
		return retVal;
	}
}
