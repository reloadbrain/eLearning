package eLearning.sf.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class PreExamObligationsRecords {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long preExamORecordsId;

	@OneToOne
	@Column(nullable = false)
	private Exam exam;

	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;

	@Column(nullable = true)
	private Integer points;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private boolean passed;
	
	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private boolean active;
}
