package eLearning.sf.converter;

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
		studentRecords.setExamRecordsId(studentRecords.getExamRecordsId());
		studentRecords.setGrade(studentRecords.getGrade());
		studentRecords.setPassed(studentRecords.isPassed());
		studentRecords.setTotalPoints(studentRecords.getTotalPoints());
		studentRecords.setStudent(studentService.getOne(studentRecordsDto.getStudentId()));
		studentRecords.setExam(examService.getOne(studentRecordsDto.getExamId()));

		return studentRecords;
	}
}
