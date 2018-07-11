package eLearning.sf.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class EDocument {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long docId;

	@Column(nullable = false, columnDefinition = "VARCHAR(50)")
	private String nuxeoId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;
}
