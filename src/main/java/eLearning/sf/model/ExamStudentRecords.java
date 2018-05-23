package eLearning.sf.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class ExamStudentRecords {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long examRecordsId;

	@ManyToOne
	private Exam exam;

	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;
	
	@ManyToOne
	@JoinColumn(name = "examTermId", nullable = false)
	private ExamTerm examTerm;

	private String grade;

	private Integer totalPoints;

	private boolean passed;
	
	@Column(nullable = false)
	private Date examDate;
	
	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private boolean active;
}
