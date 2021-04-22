package br.com.rodrigo.contacts.domain.application;

import org.springframework.data.domain.Page;

import br.com.rodrigo.contacts.domain.model.Phone;

public interface IPhoneAppService extends BaseAppService<Phone> {

	Page<Phone> findAllBy(Long contactId, Integer page, Integer size);
	
}
