package br.com.rodrigo.contacts.api.listeners;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import br.com.rodrigo.contacts.domain.application.IApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;

@Component
public class RegistrationListener implements
  ApplicationListener<OnRegistrationCompleteEvent> {
  
    @Autowired
    private IApplicationUserAppService service;
  
    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);
    }
 
    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        ApplicationUser user = event.getUser();
        String token = UUID.randomUUID().toString();
        service.createVerificationToken(user, token);
         
        String recipientAddress = user.getEmail();
        String subject = "Registration Confirmation";
        String confirmationUrl = event.getAppUrl() 
        		+ "/signupConfirmation?token=" 
        		+ token;
         
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipientAddress);
        email.setSubject(subject);
        email.setText(getMessage(confirmationUrl));
        mailSender.send(email);
    }
    
    private String getMessage(String confirmationUrl) {
    	confirmationUrl = "http://localhost:8051" + confirmationUrl;
    	return "<html><body>"
    			+ "<h1>Hello you!</h1>"
    			+ "<h3>Thank's for registering on!</h3>"
    			+ "<p>Please verify your account to finish just clicking on</p>"
    			+ "<a href=\""+ confirmationUrl + "\"><strong>" + confirmationUrl + "</strong></a>"
    			+ "</body></html>";
    }
}