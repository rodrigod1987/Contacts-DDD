package br.com.rodrigo.contacts.domain.service;

import br.com.rodrigo.contacts.domain.model.User;

public interface IApplicationUserService extends BaseService<User> {

	User findByUsername(String username);
	
}
