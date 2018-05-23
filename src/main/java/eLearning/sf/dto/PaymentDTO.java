package eLearning.sf.dto;

import lombok.Data;

@Data
public class PaymentDTO {
	
	private Long paymentId;
 
	private String description;
	
	private Long value;
	
	private Boolean active;

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
