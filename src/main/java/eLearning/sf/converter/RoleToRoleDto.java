package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.RoleDto;
import eLearning.sf.model.Role;

@Component
public class RoleToRoleDto implements Converter<Role, RoleDto> {

	@Override
	public RoleDto convert(Role role) {

		RoleDto roleDto = new RoleDto();

		roleDto.setActive(role.getActive());
		roleDto.setName(role.getName());
		roleDto.setRoleId(role.getRoleId());

		return roleDto;
	}

	public List<RoleDto> convert(List<Role> roles) {

		List<RoleDto> retVal = new ArrayList<>();

		for (Role r : roles) {
			retVal.add(convert(r));
		}

		return retVal;
	}

}
