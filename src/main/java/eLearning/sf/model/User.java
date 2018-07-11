package eLearning.sf.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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

	@Column(nullable = false, unique = true, columnDefinition="VARCHAR(20)")
	private String username;

	@Column(nullable = false)
	private String password;

	@Column(nullable = false, columnDefinition="VARCHAR(20)")
	private String firstName;

	@Column(nullable = false, columnDefinition="VARCHAR(20)")
	private String lastName;

	@Column(nullable = false, columnDefinition="DATE")
	private Date dateOfBirth;

	@Column(columnDefinition="VARCHAR(30)")
	private String address;

	@Column(columnDefinition="VARCHAR(50)")
	private String imagePath;

	@Column(columnDefinition="VARCHAR(20)")
	private String phoneNumber;

	@Column(columnDefinition = "tinyint(1) default 1")
	private Boolean active;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_roles", joinColumns = { @JoinColumn(name = "userId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })
	private Set<Role> roles = new HashSet<>();
	
	public User() {}
	
	public User(User user) {
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
