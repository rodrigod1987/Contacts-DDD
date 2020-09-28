package br.com.rodrigo.contacts.domain.application;

import java.util.Collection;

import br.com.rodrigo.contacts.domain.model.Phone;

public interface IPhoneAppService extends BaseAppService<Phone> {

	Collection<Phone> findAllBy(Long contactId);
	
}
