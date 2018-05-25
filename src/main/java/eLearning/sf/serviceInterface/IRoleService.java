package eLearning.sf.serviceInterface;

import java.util.List;
import java.util.Optional;

import eLearning.sf.model.Role;

public interface IRoleService {

	Optional<Role> getOne(Long id);
	
	List<Role> getAll();
	
}
