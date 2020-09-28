package br.com.rodrigo.contacts.api.services;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.application.service.ApplicationUserAppService;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

	private ApplicationUserAppService appService;

	@Autowired
	public UserDetailsService(ApplicationUserAppService appService) {
		this.appService = appService;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		br.com.rodrigo.contacts.domain.model.User user = appService.findByUsername(username);
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), Collections.emptyList());
		
	}	
	
	public br.com.rodrigo.contacts.domain.model.User findBy(String username) {
		return appService.findByUsername(username);
	}
	
}
