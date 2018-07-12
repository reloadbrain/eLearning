package eLearning.sf.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class ExamDto {

	private Long examId;

	private Boolean active = true;

	@NotNull(message = "Date cannot be null")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;

	private Long courseId;

	@NotNull(message = "Exam term id can not be null")
	private Long examTermId;

	public ExamDto() {
	}

	public ExamDto(Long examId, Boolean active, Date date, Long courseId, Long examTermId) {
		this.examId = examId;
		this.active = active;
		this.date = date;
		this.courseId = courseId;
		this.examTermId = examTermId;
	}
}
