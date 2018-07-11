package eLearning.sf.dto;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
public class UserDto {
	
	private Long userId;

	@NotBlank(message="Username cannot be empty!")
	@Length(max=20, message="Password can not contain more than 20 characters")
	private String username;

	@NotBlank(message="First name cannot be empty!")
	@Length(max=20, message="First name can not contain more than 20 characters")
	private String firstName;

	@NotBlank(message="Last name cannot be empty!")
	@Length(max=20, message="Last name can not contain more than 20 characters")
	private String lastName;

	@NotNull(message="Birth date cannot be null")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date dateOfBirth;

	@Length(max=30, message="Address can not contain more than 30 characters")
	private String address;

	@Length(max=50, message="Image path can not contain more than 25 characters")
	private String imagePath;

	@Length(max=20, message="Phone number can not contain more than 20 characters")
	private String phoneNumber;
	
	private Boolean active;
	
	private Set<Long> roleId = new HashSet<>();
	
	private Set<String> roleName = new HashSet<>();
	
	public UserDto() {}

	public UserDto(Long userId,
			@NotBlank(message = "Username cannot be empty!") @Length(max = 20, message = "Password can not contain more than 20 characters") String username,
			@NotBlank(message = "First name cannot be empty!") @Length(max = 20, message = "First name can not contain more than 20 characters") String firstName,
			@NotBlank(message = "Last name cannot be empty!") @Length(max = 20, message = "Last name can not contain more than 20 characters") String lastName,
			@NotNull(message = "Birth date cannot be null") Date dateOfBirth,
			@Length(max = 30, message = "Address can not contain more than 30 characters") String address,
			@Length(max = 25, message = "Image path can not contain more than 25 characters") String imagePath,
			@Length(max = 20, message = "Phone number can not contain more than 20 characters") String phoneNumber,
			Boolean active, Set<Long> roleId, Set<String> roleName) {
		this.userId = userId;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.imagePath = imagePath;
		this.phoneNumber = phoneNumber;
		this.active = active;
		this.roleId = roleId;
		this.roleName = roleName;
	};

	
	
	
	
}
