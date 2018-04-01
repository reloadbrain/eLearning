package eLearning.sf.model;

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
public class PreExamObligation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long preExamOId;
	
	@Column(nullable=false, columnDefinition="tinyint(1) default 1")
	private Boolean active;
	
	@ManyToOne
	@JoinColumn(name = "preExamOTypeId", nullable = false)
	private PreExamObligationType type;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "preexamobligation_student",
			joinColumns = {@JoinColumn(name = "preExamOId")},
			inverseJoinColumns = {@JoinColumn(name = "studentId")})
	private Set<Student> students = new HashSet<>();
	
	@ManyToOne
	@JoinColumn(name = "courseId", nullable = false)
	private Course course;
}
