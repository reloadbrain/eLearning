package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;

import lombok.Data;

@Data
public class StudentDto {
	private Long studentId;

	@NotBlank(message = "Transcript number cannot be empty!")
	@Length(min = 5, message = "Transcript number has to contain 5 or more characters")
	@UniqueElements(message = "Student with same transcript number already exists")
	private String transcriptNumber;

	@NotNull(message = "Field 'active' cannot be null!")
	private Boolean active;

	@Length(max = 5, message = "Year cannot be bigger than 5")
	private Integer year;

	@NotBlank(message = "User id cannot be empty!")
	private Long userId;

	@NotBlank(message = "Department id cannot be empty!")
	private Long departmentId;

	public StudentDto() {
	}

	public StudentDto(Long studentId, String transcriptNumber, Boolean active, Integer year, Long userId,
			Long departmentId) {
		this.studentId = studentId;
		this.transcriptNumber = transcriptNumber;
		this.active = active;
		this.year = year;
		this.userId = userId;
		this.departmentId = departmentId;
	}
}
