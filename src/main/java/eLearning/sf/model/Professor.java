package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Professor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long professorId;

	@ManyToOne
	@JoinColumn(name = "type_id", nullable = false)
	private ProfessorType type;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToMany
	@JoinTable(name = "professor_course", joinColumns = { @JoinColumn(name = "professorId") }, inverseJoinColumns = {
			@JoinColumn(name = "courseId") })
	private Set<Course> courses = new HashSet<>();

	@OneToOne
	private User user;
}
