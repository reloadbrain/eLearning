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
public class EDocType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long typeId;

	@Column(nullable = false, columnDefinition = "VARCHAR(30)")
	private String name;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "type")
	private Set<EDocument> documents = new HashSet<>();
}
