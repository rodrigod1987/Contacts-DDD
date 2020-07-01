package br.com.rodrigo.contacts.domain.service;

import java.util.Collection;

import br.com.rodrigo.contacts.domain.model.Phone;

public interface IPhoneService extends BaseService<Phone> {

	Collection<Phone> findAllBy(Long contactId);
	
}
