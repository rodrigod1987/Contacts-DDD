package br.com.rodrigo.contacts.domain.service;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public interface ApplicationUserServiceIntf extends BaseService<ApplicationUser> {

	ApplicationUser findByUserName(String userName);
	
}
