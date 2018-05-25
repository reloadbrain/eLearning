package eLearning.sf.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Role;
import eLearning.sf.repository.RoleJpaRepo;
import eLearning.sf.serviceInterface.IRoleService;

@Service
public class RoleServiceImpl implements IRoleService {

	@Autowired
	private RoleJpaRepo roleJpaRepo;
	
	@Override
	public Optional<Role> getOne(Long id) {
		return roleJpaRepo.findById(id);
	}

	@Override
	public List<Role> getAll() {
		return roleJpaRepo.findAll();
	}

}
