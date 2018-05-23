package eLearning.sf.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ExamStudentRecordsDto {

	@NotNull(message = "Exam records id can not be null!")
	private Long examRecordsId;

	@NotNull(message = "Exam id can not be null!")
	private Long examId;

	@NotNull(message = "Student id can not be null!")
	private Long studentId;

	private String grade;

	private Integer totalPoints;

	private boolean passed;
}
