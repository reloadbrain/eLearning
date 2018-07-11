package eLearning.sf.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class EDocumentDTO {
	
	private Long EDocumentId;
	
	@NotBlank(message="nuxeoId cannot be empty!")
	@Length(max=50, message="nuxeoId can not contain more than 50 characters")
	private String nuxeoId;
	
	@NotBlank(message="studentId cannot be empty!")
	private Long studentId;
	
	private String transcriptNumber;
	
	public EDocumentDTO() {}

	public EDocumentDTO(Long eDocumentId,
			@NotBlank(message = "nuxeoId cannot be empty!") @Length(max = 50, message = "nuxeoId can not contain more than 50 characters") String nuxeoId,
			@NotBlank(message = "studentId cannot be empty!") Long studentId, String transcriptNumber) {
		super();
		EDocumentId = eDocumentId;
		this.nuxeoId = nuxeoId;
		this.studentId = studentId;
		this.transcriptNumber = transcriptNumber;
	}

}
