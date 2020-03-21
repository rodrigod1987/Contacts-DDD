package br.com.rodrigo.contacts.api.controller;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.domain.app.service.ApplicationUserAppServiceIntf;
import br.com.rodrigo.contacts.domain.service.dto.ApplicationUserDto;

@RestController
@RequestMapping("/api/v1/users")
public class ApplicationUserController {
	
	private ApplicationUserAppServiceIntf appService;
	private PasswordEncoder encoder;
	
	public ApplicationUserController(ApplicationUserAppServiceIntf appService,
			PasswordEncoder encoder) {
		this.appService = appService;
		this.encoder = encoder;
	}
	
	@PostMapping("/signup")
	public void signUp(@RequestBody ApplicationUserDto user) {
		
		user.setPassword(encoder.encode(user.getPassword()));
		appService.save(user);
		
	}
	
}
