package eLearning.sf.model;

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

	public ExamStudentRecords(Long examRecordsId, Exam exam, Student student, Integer grade, Integer points,
			boolean passed, boolean active) {
		this.examRecordsId = examRecordsId;
		this.exam = exam;
		this.student = student;
		this.grade = grade;
		this.points = points;
		this.passed = passed;
		this.active = active;
	}

	public ExamStudentRecords() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long examRecordsId;

	@ManyToOne
	@JoinColumn(name = "examId", nullable = false)
	private Exam exam;

	@ManyToOne
	@JoinColumn(name = "studentId", nullable = false)
	private Student student;

	private Integer grade;

	private Integer points;

	@Column(columnDefinition = "tinyint(1) default 1")
	private boolean passed;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private boolean active;
}
