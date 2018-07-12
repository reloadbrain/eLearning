package eLearning.sf.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class PreExamObligationsRecords {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long preExamORecordsId;

	@Column(nullable = false)
	private Date date;
	
	@ManyToOne
	@JoinColumn(name = "preExamObligationId", nullable = false)
	private PreExamObligation preExamObligation;

	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;

	@Column(nullable = true)
	private Integer points;

	@Column(nullable = true, columnDefinition = "tinyint(1) default 1")
	private boolean passed;
	
	@Column(nullable = true, columnDefinition = "tinyint(1) default 1")
	private boolean active;
}
