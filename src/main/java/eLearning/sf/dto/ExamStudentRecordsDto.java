package eLearning.sf.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class ExamStudentRecordsDto {

	private String studentFirstName;

	private String studentLastName;
	
	private String username;

	private String studentTranscriptNumber;

	private int preExamPoints;

	@NotNull(message = "Exam records id can not be null!")
	private Long examRecordsId;

	@NotNull(message = "Exam id can not be null!")

	private Long examId;

	@NotNull(message = "Student id can not be null!")
	private Long studentId;

	private Long courseId;

	private Integer grade;

	private Integer points;

	private boolean passed;

	@NotNull(message = "Date cannot be null")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date examDate;

	@NotNull(message = "Field 'active' cannot be null!")
	private Boolean active;

	public ExamStudentRecordsDto() {
	}

	public ExamStudentRecordsDto(Long examRecordsId, Long examId, Long studentId, Integer grade, Integer points,
			boolean passed, Boolean active, Date examDate) {
		this.examRecordsId = examRecordsId;
		this.examId = examId;
		this.studentId = studentId;
		this.grade = grade;
		this.points = points;
		this.passed = passed;
		this.active = active;
		this.examDate = examDate;
	}
}
