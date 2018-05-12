package eLearning.sf.dto;

import java.sql.Date;

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

	@NotBlank(message="Password cannot be empty!")
	private String password;

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

	@Length(max=25, message="Image path can not contain more than 25 characters")
	private String imagePath;

	@Length(max=20, message="Phone number can not contain more than 20 characters")
	private String phoneNumber;
	
	@Length(max=1, message="Max length is 1")
	private Boolean active;
	
	public UserDto() {};

	public UserDto(Long userId, String username, String password, String firstName, String lastName, Date dateOfBirth,
			String address, String imagePath, String phoneNumber, Boolean active) {
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.imagePath = imagePath;
		this.phoneNumber = phoneNumber;
		this.active = active;
	}	
	
	
	
}
