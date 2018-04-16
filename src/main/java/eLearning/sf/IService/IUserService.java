package eLearning.sf.IService;

import eLearning.sf.model.User;

public interface IUserService {

	User findByUsername(String username); 
	User save(User user);
}
