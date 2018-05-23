package eLearning.sf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import eLearning.sf.model.User;
import eLearning.sf.serviceInterface.IUserService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private IUserService iUserService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser = iUserService.findByUsername(username);
		optionalUser.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
		List<GrantedAuthority> authorities = optionalUser.get().getRoles().stream()
				.map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName())).collect(Collectors.toList());
		return new org.springframework.security.core.userdetails.User(optionalUser.get().getUsername(), optionalUser.get().getPassword(), authorities);
	}
}
