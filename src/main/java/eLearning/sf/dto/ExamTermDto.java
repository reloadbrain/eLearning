package eLearning.sf.dto;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class ExamTermDto {

	private Long examTermId;

	@NotBlank(message = "Exam term name cannot be empty!")
	@Length(max = 50, message = "Exam term name can not contain more than 50 characters")
	private String name;

	@Max(12)
	@NotBlank(message = "Month cannot be empty!")
	private Integer month;

	@NotNull(message = "Field 'active' cannot be null!")
	private Boolean active;

	public ExamTermDto() {
	}

	public ExamTermDto(Long examTermId, String name, Integer month, Boolean active) {
		this.examTermId = examTermId;
		this.name = name;
		this.month = month;
		this.active = active;
	}
}
