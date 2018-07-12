package eLearning.sf.nuxeo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class Document {

	@JsonProperty("entity-type")
	private String entityType;
	private String repository;
	private String uid;
	private String path;
	private String type;
	private String state;
	private String parentRef;
	private String versionLabel;
	private String isCheckedOut;
	private String title;
	private Date lastModified;
	private String[] facets;
	private String changeToken;
	private boolean isFolder;
	
}
