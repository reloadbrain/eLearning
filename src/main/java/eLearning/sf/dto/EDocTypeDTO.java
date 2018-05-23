package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class EDocTypeDTO {

	private Long EDocTypeId;
	
	@NotBlank(message="Name cannot be empty!")
	@Length(max=20, message="Name can not contain more than 20 characters")
	private String name;
	
	@Length(max=1, message="Max length is 1")
	private Boolean active;

	public EDocTypeDTO(
			@NotBlank(message = "Name cannot be empty!") @Length(max = 20, message = "Name can not contain more than 20 characters") String name,
			@Length(max = 1, message = "Max length is 1") Boolean active) {
		super();
		this.name = name;
		this.active = active;
	}

	public EDocTypeDTO() {
		super();
	}
	
	
	
}
