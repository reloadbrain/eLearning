package eLearning.sf.dto;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class CourseDTO {

	private Long courseId;
	
	@Length(max=30, message="Name cannot contain more than 30 characters")
	private String name;
	
	@AssertTrue
	private Boolean active;

	@NotNull(message="departmentId cannot be null")
	@Min(value=0, message="departmentId must be >= than 0")
	private Long departmentId;

	
	@NotNull(message="studentId cannot be null")
	@Min(value=0, message="studentId must be >= than 0")
	private Long studentId;
	
	public CourseDTO() {}


	public CourseDTO(Long courseId, String name, Boolean active, Long departmentId , Long studentId) {
		super();
		this.courseId = courseId;
		this.name = name;
		this.active = active;
		this.departmentId = departmentId;
		this.studentId = studentId;
	}
	
}
