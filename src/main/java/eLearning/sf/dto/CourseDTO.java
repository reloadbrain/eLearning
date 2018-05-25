package eLearning.sf.dto;

import lombok.Data;

@Data
public class CourseDTO {

	private Long courseId;
	
	private String name;
	
	private Boolean active;
	
	private Long departnebtId;
	
	
	public CourseDTO() {}


	public CourseDTO(Long courseId, String name, Boolean active, Long departnebtId) {
		super();
		this.courseId = courseId;
		this.name = name;
		this.active = active;
		this.departnebtId = departnebtId;
	}
	
}
