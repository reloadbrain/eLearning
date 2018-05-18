package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class EDocumentDTO {
	
	private Long EDocumentId;
	
	@NotBlank(message="EDocumentTypeId cannot be empty!")
	private Long EDocumentTypeId;
	
	@NotBlank(message="Name cannot be empty!")
	@Length(max=20, message="Name can not contain more than 20 characters")
	private String name;
	
	@Length(max=1, message="Max length is 1")
	private Boolean active;
	
	@NotBlank(message="studentId cannot be empty!")
	private Long studentId;


	public EDocumentDTO() {
		super();
	}

	public EDocumentDTO(@NotBlank(message = "EDocumentTypeId cannot be empty!") Long eDocumentTypeId,
			@NotBlank(message = "Name cannot be empty!") @Length(max = 20, message = "Name can not contain more than 20 characters") String name,
			@Length(max = 1, message = "Max length is 1") Boolean active,
			@NotBlank(message = "StudentId cannot be empty!") Long studentId) {
		super();
		EDocumentTypeId = eDocumentTypeId;
		this.name = name;
		this.active = active;
		this.studentId = studentId;
	}
	
	
	
	

}
