package br.com.rodrigo.contacts.api.services;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.app.service.ApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;

@Service
public class ApplicationUserDetailsService implements UserDetailsService {

	private ApplicationUserAppService appService;

	@Autowired
	public ApplicationUserDetailsService(ApplicationUserAppService appService) {
		this.appService = appService;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		ApplicationUser user = appService.findByUsername(username);
		
		if (user == null) {
            throw new UsernameNotFoundException(username);
        }
		
		return new User(user.getUsername(), user.getPassword(), Collections.emptyList());
	}	
	
	public ApplicationUser findBy(String username) {
		return appService.findByUsername(username);
	}
	
}
