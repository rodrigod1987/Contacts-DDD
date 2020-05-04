package br.com.rodrigo.contacts.domain.service;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public interface IApplicationUserService extends BaseService<ApplicationUser> {

	ApplicationUser findByUsername(String username);
	
}
