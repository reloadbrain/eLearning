package eLearning.sf.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.RoleDto;
import eLearning.sf.model.Role;

@Component
public class RoleDtoToRole implements Converter<RoleDto, Role>{

	@Override
	public Role convert(RoleDto roleDto) {
		Role role = new Role();
		role.setActive(roleDto.getActive());
		role.setName(roleDto.getName());
		return role;
	}
	
	

}
