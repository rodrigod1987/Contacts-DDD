package br.com.rodrigo.contacts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.api.security.JwtToken;
import br.com.rodrigo.contacts.api.services.UserDetailsService;
import br.com.rodrigo.contacts.domain.model.User;
import br.com.rodrigo.contacts.domain.service.dto.UserDto;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

	private AuthenticationManager authenticationManager;
	private UserDetailsService applicationUserDetailsService;
	private JwtToken jwtToken;

	@Autowired
	public AuthenticationController(AuthenticationManager authenticationManager,
			UserDetailsService applicationUserDetailsService, JwtToken jwtToken) {
		this.authenticationManager = authenticationManager;
		this.applicationUserDetailsService = applicationUserDetailsService;
		this.jwtToken = jwtToken;
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> authenticate(@RequestBody UserDto user) {
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(), 
							user.getPassword()));
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new RuntimeException(e.getMessage(), null);
		} 
		
		User userDetails = this.applicationUserDetailsService
				.findBy(user.getUserName());
		
		String token = jwtToken.generate(userDetails);
		
		return ResponseEntity
				.ok(token);
		
	}
	
}
