package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	@JoinColumn(name = "type_id")
	private ProfessorType type;

	@Column(columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "professor_course", joinColumns = { @JoinColumn(name = "professorId") }, inverseJoinColumns = {
			@JoinColumn(name = "courseId") })
	private Set<Course> courses = new HashSet<>();

	@OneToOne(fetch = FetchType.LAZY)
	private User user;
}
