package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class PreExamObligationsRecordsDTO {
	
	private Long PreExamObligationsRecordsId;
	
	@NotBlank(message="ExamId cannot be empty!")
	private Long examId;
	
	@NotBlank(message="StudentId cannot be empty!")
	private Long studentId;

	private Integer points;
	
	@Length(max=1, message="Max length is 1")
	private boolean passed;
	
	@Length(max=1, message="Max length is 1")
	private boolean active;

	public PreExamObligationsRecordsDTO(@NotBlank(message = "ExamId cannot be empty!") Long examId,
			@NotBlank(message = "StudentId cannot be empty!") Long studentId, Integer points,
			@Length(max = 1, message = "Max length is 1") boolean passed,
			@Length(max = 1, message = "Max length is 1") boolean active) {
		super();
		this.examId = examId;
		this.studentId = studentId;
		this.points = points;
		this.passed = passed;
		this.active = active;
	}

	public PreExamObligationsRecordsDTO() {
		super();
	}
	
	
	

}
