package br.com.rodrigo.contacts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.api.configuration.JwtToken;
import br.com.rodrigo.contacts.api.dto.TokenResponseDto;
import br.com.rodrigo.contacts.api.services.ApplicationUserDetailsService;
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
	public ResponseEntity<?> authenticate(@RequestBody ApplicationUserDto user) throws Exception {
		
		authenticate(user.getUserName(), user.getPassword());
		
		UserDetails userDetails = applicationUserDetailsService.loadUserByUsername(user.getUserName());
		
		return ResponseEntity.ok(new TokenResponseDto(jwtToken.generate(userDetails)));
		
	}

	private void authenticate(String userName, String password) throws Exception {
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException ex) {
			throw new Exception("INVALID_CREDENTIALS", ex);
		}
		
	}
	
}
