package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.ToString;

@ToString(exclude="students")
@Entity
@Data
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long courseId;

	@Column(nullable = false, columnDefinition="VARCHAR(75)")
	private String name;

	@ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY)
	private Set<Professor> professors = new HashSet<>();

//	@Transient
	@JsonIgnoreProperties("students")
	@ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY ,  cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
        })
//	@ManyToMany(mappedBy = "courses")
	private Set<Student> students = new HashSet<>();
	
	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "departmentId", nullable = false)
	private Department department;

	@OneToMany(mappedBy = "course")
	private Set<Exam> exams = new HashSet<>();

	@OneToMany(mappedBy = "course")
	private Set<PreExamObligation> preExamObligations = new HashSet<>();
}
