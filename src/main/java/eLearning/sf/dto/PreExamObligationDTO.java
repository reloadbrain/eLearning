package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class PreExamObligationDTO {
	
	private Long preExamOId;
	
	@NotBlank(message="Name cannot be empty!")
	@Length(max=20, message="Name can not contain more than 20 characters")
	private String name;
	
	//@Length(max=1, message="Max length is 1")
	private Boolean active;
	
	@NotNull(message="PreExamOTypeId cannot be empty!")
	private Long preExamOTypeId;
	
	@NotNull(message="maxPoints cannot be empty!")
	private Integer maxPoints;
	
	@NotNull(message="CourseId cannot be empty!")
	private Long courseId;

	

	public PreExamObligationDTO() {
		super();
	}



	public PreExamObligationDTO(Long preExamOId,
			@NotBlank(message = "Name cannot be empty!") @Length(max = 20, message = "Name can not contain more than 20 characters") String name,
			@Length(max = 1, message = "Max length is 1") Boolean active,
			@NotBlank(message = "PreExamOTypeId cannot be empty!") Long preExamOTypeId,
			@NotBlank(message = "maxPoints cannot be empty!") Integer maxPoints,
			@NotBlank(message = "CourseId cannot be empty!") Long courseId) {
		super();
		this.preExamOId = preExamOId;
		this.name = name;
		this.active = active;
		this.preExamOTypeId = preExamOTypeId;
		this.maxPoints = maxPoints;
		this.courseId = courseId;
	}
	
	
	
	
}
