package br.com.rodrigo.contacts.api.listeners;

import java.util.UUID;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import br.com.rodrigo.contacts.domain.application.IApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.User;

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
        User user = event.getUser(); 
        String token = UUID.randomUUID().toString();
        service.createVerificationToken(user, token);
         
        String recipientAddress = user.getEmail();
        String subject = "Registration Confirmation";
        String confirmationUrl = event.getAppUrl() 
        		+ "home/validate?token=" 
        		+ token;
         
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper email = new MimeMessageHelper(message, "utf-8");
        
        try {
			email.setTo(recipientAddress);
			email.setSubject(subject);
			message.setContent(getMessage(confirmationUrl), "text/html");
		} catch (MessagingException e) {
			e.printStackTrace();
			throw new RuntimeException("Malformed mail message.", e);
		}
        
        mailSender.send(message);
    }
    
    private String getMessage(String confirmationUrl) {
    	return "<html><body>"
    			+ "<h1>Hello you!</h1>"
    			+ "<h3>Thank's for registering on!</h3>"
    			+ "<p>Please verify your account to finish just clicking on</p>"
    			+ "<a href=\""+ confirmationUrl + "\"><strong>" + confirmationUrl + "</strong></a>"
    			+ "</body></html>";
    }
}