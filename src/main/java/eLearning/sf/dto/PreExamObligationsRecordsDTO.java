package eLearning.sf.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class PreExamObligationsRecordsDTO {
	
	private Long PreExamObligationsRecordsId;
	
	@NotNull(message="StudentId cannot be empty!")
	private Long studentId;

	@NotNull(message="preExamObligationId cannot be empty!")
	private Long preExamObligationId;
	
	@NotNull(message="date cannot be null")
	@DateTimeFormat(pattern="yyyy-MM-dd")
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

	public PreExamObligationsRecordsDTO(@NotNull(message = "StudentId cannot be empty!") Long studentId,
			@NotNull(message = "preExamObligationId cannot be empty!") Long preExamObligationId,
			@NotNull(message = "strDate cannot be null") Date date,
			@NotNull(message = "Points cannot be null") Integer points, boolean passed, boolean active) {
		super();
		this.studentId = studentId;
		this.preExamObligationId = preExamObligationId;
		this.date = date;
		this.points = points;
		this.passed = passed;
		this.active = active;
	}

	

	
		
}
