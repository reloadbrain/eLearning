package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.UserDto;
import eLearning.sf.model.User;

@Component
public class UserDtoToUser implements Converter<UserDto, User> {

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
		user.setPassword(userDto.getPassword());
		user.setUserId(userDto.getUserId());
		user.setUsername(userDto.getUsername());

		return user;
	}
}
