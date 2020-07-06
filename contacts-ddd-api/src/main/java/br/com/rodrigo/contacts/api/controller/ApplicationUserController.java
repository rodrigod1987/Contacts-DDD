package br.com.rodrigo.contacts.api.controller;

import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import br.com.rodrigo.contacts.api.listeners.OnRegistrationCompleteEvent;
import br.com.rodrigo.contacts.domain.application.IApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.User;
import br.com.rodrigo.contacts.domain.model.VerificationToken;

@RestController
@RequestMapping("/api/v1/users")
public class ApplicationUserController {
	
	private IApplicationUserAppService appService;
	private PasswordEncoder encoder;
	@Autowired
	private ApplicationEventPublisher eventPublisher;
	@Autowired
	private Environment env;
	
	public ApplicationUserController(IApplicationUserAppService appService,
			PasswordEncoder encoder) {
		this.appService = appService;
		this.encoder = encoder;
	}
	
	@PostMapping("/signup")
	public void signUp(@RequestBody User user, 
			  HttpServletRequest request, 
			  Errors errors) {
		
		user.setPassword(encoder.encode(user.getPassword()));
		User registered = appService.save(user);
		
		String appUrl = env.getProperty("client.host");
		
        eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registered, 
          request.getLocale(), 
          appUrl));
		
	}
	
	@GetMapping("/signupConfirmation")
	public ResponseEntity<String> signupConfirmation(WebRequest request, 
			  @RequestParam("token") String token) {
	     
	    VerificationToken verificationToken = appService.getVerificationToken(token);
	    if (verificationToken == null) {
	        //return badUser because the token is null
	    	return ResponseEntity
	    			.badRequest()
	    			.body("The given token was not found in application.");
	    }
	     
	    User user = verificationToken.getUser();
	    
	    Calendar cal = Calendar.getInstance();
	    if ((verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
	    	//return badUser because the token is null
	    	return ResponseEntity
	    			.badRequest()
	    			.body("The given token has been expired.");
	    } 
	     
	    appService.saveRegisteredUser(user);
	    
	    return ResponseEntity
	    		.ok()
	    		.body("The user was activated successfully!");
	}
	
}
