package eLearning.sf.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Role;
import eLearning.sf.model.User;
import eLearning.sf.repository.UserJpaRepo;
import eLearning.sf.serviceInterface.IRoleService;
import eLearning.sf.serviceInterface.IUserService;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserJpaRepo userJpaRepo;
	
	@Autowired
	private IUserService iUserService;
	
	@Autowired
	IRoleService iRoleService;

	@Override
	public User getOne(Long id) {
		Optional<User> u = userJpaRepo.findById(id);
		if (u.isPresent()) {
			return u.get();
		}
		return null;
	}

	@Override
	public Optional<User> findByUsername(String username) {
		return userJpaRepo.findByUsername(username);
	}

	@Override
	public User save(User user) {
		return userJpaRepo.save(user);
	}

	@Override
	public Page<User> listAllByPageActive(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllActiveByPageAndSearch(searchTerm, pageable);
	}

	@Override
	public Page<User> listAllByPageNotActive(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllNonActiveByPageAndSearch(searchTerm, pageable);
	}

	@Override
	public Page<User> listAllByPage(String searchTerm, Pageable pageable) {
		return userJpaRepo.findAllPageAndSearch(searchTerm, pageable);
	}

	@Override
	public User editUser(User u, UserDto userDto) {
		u.setUsername(userDto.getUsername());
		u.setFirstName(userDto.getFirstName());
		u.setAddress(userDto.getAddress());
		u.setDateOfBirth(userDto.getDateOfBirth());
		u.setLastName(userDto.getLastName());
		u.setPhoneNumber(userDto.getPhoneNumber());
		Set<Role> beforeRoles = u.getRoles();
		if (!userDto.getRoleId().isEmpty()) {
			u.getRoles().clear();
			for (Long roleid: userDto.getRoleId()) {
				Optional<Role> role = iRoleService.getOne(roleid);
				if (role.isPresent()) {
					u.getRoles().add(role.get());
				}else if(!role.isPresent()) {
					log.error("There is no role with id: {}", roleid);
				}
			}
			if(u.getRoles().isEmpty()) {
				u.setRoles(beforeRoles);
			}
		}else if(userDto.getRoleId().isEmpty()) {
			return null;
		}
		return u;
	}

	@Override
	public boolean isUsernameUnique(String username, String edit, String oldUsername) {
		Optional<User> u = iUserService.findByUsername(oldUsername);
		if(!u.isPresent()) {
			return true;
		}else if(u.isPresent() && edit.equals("edit")) {
			
			List<User> users = userJpaRepo.findAll();
			users.remove(u.get());
			for (User us: users) {
				if (us.getUsername().equals(username)) {
					return false;
				}
			}
			return true;
		}
		return false;
	}
}
