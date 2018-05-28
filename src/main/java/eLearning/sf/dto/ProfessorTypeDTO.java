package eLearning.sf.dto;

import javax.persistence.Column;
import javax.validation.constraints.AssertTrue;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class ProfessorTypeDTO {

	private Long professorTypeId;
	
	@Length(max=30, message="Name cannot contain more than 30 characters")
	private String name;
	
	@AssertTrue
	private Boolean active;
	
	public ProfessorTypeDTO() {}

	public ProfessorTypeDTO(Long professorTypeId,
			@Length(max = 30, message = "Name cannot contain more than 30 characters") String name, Boolean active) {
		super();
		this.professorTypeId = professorTypeId;
		this.name = name;
		this.active = active;
	}
	
	
}
