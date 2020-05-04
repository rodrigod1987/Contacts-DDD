package br.com.rodrigo.contacts.domain.application;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.model.VerificationToken;

public interface IApplicationUserAppService extends BaseAppService<ApplicationUser> {

	
	/**
	 * Get an application user based on username
	 * 
	 * @param userName
	 * @return
	 */
	ApplicationUser findByUsername(String username);

	/**
	 * Method responsible to create a token to finish registration user
	 * sending a e-mail confirmation
	 * 
	 * @param user
	 * @param token
	 */
	void createVerificationToken(ApplicationUser user, String token);

	/**
	 * Get the verificationToken based on given token
	 * 
	 * @param token
	 * @return
	 */
	VerificationToken getVerificationToken(String token);

	/**
	 * Save the given user as registered an enabled to use the application
	 * 
	 * @param user
	 */
	void saveRegisteredUser(ApplicationUser user);
	
}
