package eLearning.sf.model;


import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class PreExamObligation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long preExamOId;

	@Column(nullable = false, columnDefinition="VARCHAR(30)")
	private String name;
	
	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToOne
	@JoinColumn(name = "typeId", nullable = false)
	private PreExamObligationType type;
	
	@OneToMany(mappedBy = "preExamObligation")
	private Set<PreExamObligationsRecords> preExamObligationsRecords;
	
	@ManyToOne
	@JoinColumn(name = "courseId", nullable = false)
	private Course course;
}
