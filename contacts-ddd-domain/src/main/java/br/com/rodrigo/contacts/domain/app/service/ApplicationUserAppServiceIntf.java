package br.com.rodrigo.contacts.domain.app.service;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public interface ApplicationUserAppServiceIntf extends BaseAppService<ApplicationUser> {

	ApplicationUser findByUserName(String userName);
	
}
