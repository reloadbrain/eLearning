package eLearning.sf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;


@Entity
@Data
public class ExamStudentRecords {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long examTermId;
	
	@OneToOne
	private Exam exam;
	
	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;
	
	private String mark;
	
	private Integer totalPoints;
	
	private boolean passed;
}
