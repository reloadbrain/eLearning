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
public class ProfessorType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long typeId;
	
	private String name;
	
	@Column(nullable=false, columnDefinition="tinyint(1) default 1")
	private Boolean active;
	
	@OneToMany(mappedBy = "type")
	private Set<Professor> professors = new HashSet<>();
	
	
}
