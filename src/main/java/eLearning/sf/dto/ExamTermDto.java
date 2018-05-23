package eLearning.sf.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class ExamTermDto {

	private Long examTermId;

	@NotNull(message = "Field 'active' cannot be null!")
	private Boolean active;

	@NotBlank(message = "Exam term name cannot be empty!")
	@Length(max = 50, message = "Exam term name can not contain more than 50 characters")
	private String name;

	public ExamTermDto(Long examTermId, Boolean active, String name) {
		this.examTermId = examTermId;
		this.active = active;
		this.name = name;
	}
}
