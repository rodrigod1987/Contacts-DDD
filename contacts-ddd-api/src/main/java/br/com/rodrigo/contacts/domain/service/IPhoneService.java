package br.com.rodrigo.contacts.domain.service;

import org.springframework.data.domain.Page;

import br.com.rodrigo.contacts.domain.model.Phone;

public interface IPhoneService extends BaseService<Phone> {

	Page<Phone> findAllBy(Long contactId, Integer page, Integer size);
	
}
