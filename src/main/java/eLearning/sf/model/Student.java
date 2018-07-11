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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long studentId;

	@Column(unique = true)
	private String transcriptNumber;

	@Column(columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	private Integer year;

	@OneToOne
	private User user;

	@ManyToMany
	@JoinTable(name = "students_courses", joinColumns = { @JoinColumn(name = "studentId") }, inverseJoinColumns = {
			@JoinColumn(name = "courseId") })
	private Set<Course> courses = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<Payment> payments = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<EDocument> documents = new HashSet<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "departmentId")
	private Department department;

	@OneToMany(mappedBy = "student")
	private Set<ExamStudentRecords> examRecords = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<PreExamObligationsRecords> preExamObligationRecords = new HashSet<>();
}