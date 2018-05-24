package eLearning.sf.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

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

	@NotNull(message = "Date cannot be null")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date examDate;

	@NotNull(message = "Field 'active' cannot be null!")
	private Boolean active;

	public ExamStudentRecordsDto() {
	}

	public ExamStudentRecordsDto(Long examRecordsId, Long examId, Long studentId, String grade, Integer totalPoints,
			boolean passed, Boolean active, Date examDate) {
		this.examRecordsId = examRecordsId;
		this.examId = examId;
		this.studentId = studentId;
		this.grade = grade;
		this.totalPoints = totalPoints;
		this.passed = passed;
		this.active = active;
		this.examDate = examDate;
	}
}
