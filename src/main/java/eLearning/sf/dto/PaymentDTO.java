package eLearning.sf.dto;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class PaymentDTO {
	
	private Long paymentId;
 
	@Length(max=30, message="Description cannot contain more than 30 characters")
	private String description;
	
	@NotNull(message="value cannot be null")
	@Min(value=0, message="value must be >= than 0")
	private Long value;
	
	@AssertTrue
	private Boolean active;

	@NotNull(message="studentId cannot be null")
	@Min(value=0, message="studentId must be >= than 0")
	private Long studentId;

	public PaymentDTO() {}

	public PaymentDTO(Long paymentId, String description, Long value, Boolean active, Long studentId) {
		super();
		this.paymentId = paymentId;
		this.description = description;
		this.value = value;
		this.active = active;
		this.studentId = studentId;
	}

}
