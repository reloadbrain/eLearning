package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.Role;
import eLearning.sf.model.User;

@Component
public class UserToUserDto implements Converter<User, UserDto> {

	@Override
	public UserDto convert(User user) {
		UserDto userDto = new UserDto();
		userDto.setActive(user.getActive());
		userDto.setAddress(user.getAddress());
		userDto.setDateOfBirth(user.getDateOfBirth());
		userDto.setFirstName(user.getFirstName());
		userDto.setImagePath(user.getImagePath());
		userDto.setLastName(user.getLastName());
		userDto.setPhoneNumber(user.getPhoneNumber());
		userDto.setUserId(user.getUserId());
		userDto.setUsername(user.getUsername());

		if (!user.getRoles().isEmpty()) {
			
			for (Role r: user.getRoles()) {
				userDto.getRoleId().add(r.getRoleId());
				userDto.getRoleName().add(r.getName());
			}
		}
		
		return userDto;
	}

	public List<UserDto> convert(List<User> users) {

		List<UserDto> retVal = new ArrayList<>();

		for (User u : users) {
			retVal.add(convert(u));
		}

		return retVal;
	}
}
