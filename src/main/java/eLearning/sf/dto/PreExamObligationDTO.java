package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class PreExamObligationDTO {
	
	private Long preExamOId;
	
	@NotBlank(message="Name cannot be empty!")
	@Length(max=20, message="Name can not contain more than 20 characters")
	private String name;
	
	@Length(max=1, message="Max length is 1")
	private Boolean active;
	
	@NotBlank(message="PreExamOTypeId cannot be empty!")
	private Long preExamOTypeId;
	
	@NotBlank(message="CourseId cannot be empty!")
	private Long courseId;

	public PreExamObligationDTO(
			@NotBlank(message = "Name cannot be empty!") @Length(max = 20, message = "Name can not contain more than 20 characters") String name,
			@Length(max = 1, message = "Max length is 1") Boolean active,
			@NotBlank(message = "PreExamOTypeId cannot be empty!") Long preExamOTypeId,
			@NotBlank(message = "CourseId cannot be empty!") Long courseId) {
		super();
		this.name = name;
		this.active = active;
		this.preExamOTypeId = preExamOTypeId;
		this.courseId = courseId;
	}

	public PreExamObligationDTO() {
		super();
	}
	
	
	
	
}
