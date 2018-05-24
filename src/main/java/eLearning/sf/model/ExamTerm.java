package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Max;

import lombok.Data;

@Entity
@Data
public class ExamTerm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long examTermId;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	@Max(12)
	private Integer month;

	@OneToMany(mappedBy = "examTerm")
	private Set<Exam> exams = new HashSet<>();
}
