package br.com.rodrigo.contacts.api.listeners;

import java.util.Locale;

import org.springframework.context.ApplicationEvent;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public class OnRegistrationCompleteEvent extends ApplicationEvent {
    
	/**
	 * 
	 */
	private static final long serialVersionUID = -3182228574767872151L;
	private String appUrl;
    private Locale locale;
    private ApplicationUser user;
 
    public OnRegistrationCompleteEvent(
      ApplicationUser user, Locale locale, String appUrl) {
        super(user);
         
        this.user = user;
        this.locale = locale;
        this.appUrl = appUrl;
    }
     
    public String getAppUrl() {
		return appUrl;
	}
    
    public Locale getLocale() {
		return locale;
	}
    
    public ApplicationUser getUser() {
		return user;
	}
}