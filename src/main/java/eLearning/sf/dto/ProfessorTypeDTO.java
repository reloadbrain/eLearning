package eLearning.sf.dto;

import javax.persistence.Column;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import lombok.Data;

@Data
public class ProfessorTypeDTO {

	private Long professorTypeId;
	
	@Length(max=30, message="Name cannot contain more than 30 characters")
	private String name;
	
	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
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
