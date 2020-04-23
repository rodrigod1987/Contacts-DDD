package br.com.rodrigo.contacts.domain.app.service;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public interface ApplicationUserAppServiceIntf extends BaseAppService<ApplicationUser> {

	
	/**
	 * Get an application user based on username
	 * @param userName
	 * @return
	 */
	ApplicationUser findByUsername(String username);
	
}
