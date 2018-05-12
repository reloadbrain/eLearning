package eLearning.sf.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;

	@Column(nullable = false, unique = true)
	private String username;

	@Column(nullable = false)
	private String password;

	@Column(nullable = false)
	private String firstName;

	@Column(nullable = false)
	private String lastName;

	@Column(nullable = false)
	private Date dateOfBirth;

	private String address;

	private String imagePath;

	private String phoneNumber;

	@Column(nullable = false, columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToMany
	@JoinTable(name = "user_roles", joinColumns = { @JoinColumn(name = "userId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })
	private Set<Role> roles = new HashSet<>();
	
	public User() {}
	
	public User(User user) {
		super();
		this.userId = user.getUserId();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		this.dateOfBirth = user.getDateOfBirth();
		this.address = user.getAddress();
		this.imagePath = user.getAddress();
		this.phoneNumber = user.getPhoneNumber();
		this.active = user.getActive();
		this.roles = user.getRoles();
	}
	
}
