package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.ToString;

@ToString(exclude="courses")
@Data
@Entity
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long studentId;

	@Column(unique = true, nullable = false)
	private String transcriptNumber;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	private Integer year;

	@OneToOne
	private User user;

	@JsonIgnoreProperties("courses")
	@ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
        })
	@JoinTable(name = "students_courses", joinColumns = { @JoinColumn(name = "studentId") }, inverseJoinColumns = {
			@JoinColumn(name = "courseId") })
	private Set<Course> courses = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<Payment> payments = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<EDocument> documents = new HashSet<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "departmentId", nullable = false)
	private Department department;

	@OneToMany(mappedBy = "student")
	private Set<ExamStudentRecords> examRecords = new HashSet<>();

	@OneToMany(mappedBy = "student")
	private Set<PreExamObligationsRecords> preExamObligationRecords = new HashSet<>();
}