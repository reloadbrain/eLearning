package eLearning.sf.dto;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import eLearning.sf.model.Student;
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
	
	
	private String studentFirstName;
	
	private String studentLastName;

	public PaymentDTO() {}

	public PaymentDTO(Long paymentId, String description, Long value, Boolean active, Long studentId , 
			String studentFirstName , String studentLastName) {
		super();
		this.paymentId = paymentId;
		this.description = description;
		this.value = value;
		this.active = active;
		this.studentId = studentId;
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
	}

}
