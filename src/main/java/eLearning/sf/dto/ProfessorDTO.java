package eLearning.sf.dto;

import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class ProfessorDTO {
	
	private Long professorId;
	
	private Long professorTypeId;
	
	@Length(max=1, message="Max length is 1")
	private Boolean active;

//	@NotNull(message="employeeId cannot be null")
	@Min(value=0, message="employeeId must be >= than 0")
	private Long userId;
	
	public ProfessorDTO() {
		
	}

	public ProfessorDTO(Long professorId, Long professorTypeId, Boolean active, Long userId) {
		super();
		this.professorId = professorId;
		this.professorTypeId = professorTypeId;
		this.active = active;
		this.userId = userId;
	}
	
	
}
