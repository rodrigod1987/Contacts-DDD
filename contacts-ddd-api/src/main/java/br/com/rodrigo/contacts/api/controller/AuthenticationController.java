package br.com.rodrigo.contacts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.api.configuration.JwtToken;
import br.com.rodrigo.contacts.api.services.ApplicationUserDetailsService;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.service.dto.ApplicationUserDto;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

	private AuthenticationManager authenticationManager;
	private ApplicationUserDetailsService applicationUserDetailsService;
	private JwtToken jwtToken;

	@Autowired
	public AuthenticationController(AuthenticationManager authenticationManager,
			ApplicationUserDetailsService applicationUserDetailsService, JwtToken jwtToken) {
		this.authenticationManager = authenticationManager;
		this.applicationUserDetailsService = applicationUserDetailsService;
		this.jwtToken = jwtToken;
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> authenticate(@RequestBody ApplicationUserDto user) {
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(), 
							user.getPassword()));
		} catch (DisabledException e) {
			System.out.println(e.getMessage());
			return ResponseEntity
				.badRequest()
				.body("Disabled user");
		} catch (BadCredentialsException ex) {
			System.out.println(ex.getMessage());
			return ResponseEntity
				.badRequest()
				.body("Invalid credentials.");
		}
		
		ApplicationUser userDetails = this.applicationUserDetailsService
				.findBy(user.getUserName());
		
		String token = jwtToken.generate(userDetails);
		
		return ResponseEntity
				.ok(token);
		
	}
	
}
