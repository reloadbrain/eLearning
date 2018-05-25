package eLearning.sf.converter;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Role;
import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.IRoleService;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class UserDtoToUser implements Converter<UserDto, User> {

	@Autowired
	private IRoleService iRoleService;
	
	@Override
	public User convert(UserDto userDto) {
		User user = new User();
		user.setActive(userDto.getActive());
		user.setAddress(userDto.getAddress());
		user.setDateOfBirth(userDto.getDateOfBirth());
		user.setFirstName(userDto.getFirstName());
		user.setImagePath(userDto.getImagePath());
		user.setLastName(userDto.getLastName());
		user.setPhoneNumber(userDto.getPhoneNumber());
		user.setUserId(userDto.getUserId());
		user.setUsername(userDto.getUsername());

		if (!userDto.getRoleId().isEmpty()) {
			for (Long id: userDto.getRoleId()) {
				Optional<Role> role = iRoleService.getOne(id);
				if (role.isPresent()) {
					user.getRoles().add(role.get());
				}else if(!role.isPresent()) {
					log.error("There is no role with id: {}", id);
				}
			}
		}
		
		return user;
	}
}
