package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class ExamTerm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long examTermId;
	
	@Column(nullable=false, columnDefinition="tinyint(1) default 1")
	private Boolean active;
	
	private String name;
	
	@OneToMany(mappedBy = "examTerm")
	private Set<Exam> exams = new HashSet<>();
	
	
}
