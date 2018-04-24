package eLearning.sf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class PreExamObligationType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long preExamOTypeId;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@OneToMany(mappedBy = "type", fetch = FetchType.LAZY)
	private Set<PreExamObligation> preExamObligations = new HashSet<>();
}
