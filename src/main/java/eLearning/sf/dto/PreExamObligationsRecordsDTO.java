package eLearning.sf.dto;

import java.sql.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class PreExamObligationsRecordsDTO {
	
	private Long PreExamObligationsRecordsId;
	
	@NotBlank(message="StudentId cannot be empty!")
	private Long studentId;

	@NotBlank(message="preExamObligationId cannot be empty!")
	private Long preExamObligationId;
	
	//@NotBlank(message="Date cannot be empty!")
	private  Date date;
	
	@NotNull(message = "Points cannot be null" )
	private Integer points;
	
	//@Length(max=1, message="Max length is 1")
	private boolean passed;
	
	//@NotBlank(message="active cannot be empty!")
	//@Length(max=1, message="Max length is 1")
	private boolean active;

	public PreExamObligationsRecordsDTO() {
		super();
	}

	public PreExamObligationsRecordsDTO(Long preExamObligationsRecordsId,
			@NotBlank(message = "StudentId cannot be empty!") Long studentId,
			@NotBlank(message = "preExamObligationId cannot be empty!") Long preExamObligationId,
			@NotBlank(message = "Date cannot be empty!") Date date, Integer points,
			@Length(max = 1, message = "Max length is 1") boolean passed,
			@NotBlank(message = "active cannot be empty!") @Length(max = 1, message = "Max length is 1") boolean active) {
		super();
		PreExamObligationsRecordsId = preExamObligationsRecordsId;
		this.studentId = studentId;
		this.preExamObligationId = preExamObligationId;
		this.date = date;
		this.points = points;
		this.passed = passed;
		this.active = active;
	}

	
		
}
