package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class RoleDto {

	private Long roleId;
	
	@NotBlank(message="Name cannot be empty!")
	@Length(max=10, message="Name can not contain more than 10 characters")
	private String name;

	@Length(max=1, message="Max length is 1")
	private Boolean active;

	public RoleDto() {};
	
	public RoleDto(Long roleId, String name, Boolean active) {
		this.roleId = roleId;
		this.name = name;
		this.active = active;
	}

}
