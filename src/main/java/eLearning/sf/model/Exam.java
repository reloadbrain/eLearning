package eLearning.sf.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Exam {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long examId;
	
	@Column(nullable=false, columnDefinition="tinyint(1) default 1")
	private Boolean active;
	
	private Date date;
	
	@ManyToOne
	@JoinColumn(name = "courseId", nullable = false)
	private Course course;
	
	@ManyToOne
	@JoinColumn(name = "examTermId", nullable = false)
	private ExamTerm examTerm;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "exam_student",
			joinColumns = {@JoinColumn(name = "examId")},
			inverseJoinColumns = {@JoinColumn(name = "studentId")})
	private Set<Student> students = new HashSet<>();
	
	
}
