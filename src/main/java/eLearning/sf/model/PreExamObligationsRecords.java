package eLearning.sf.model;


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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long preExamORecordsId;
	
	@OneToOne
	private Exam exam;
	
	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;
	
	private Integer points;
	
	private boolean passed;
	
}
