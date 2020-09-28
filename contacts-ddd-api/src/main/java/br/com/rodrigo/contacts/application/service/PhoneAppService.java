package br.com.rodrigo.contacts.application.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.service.PhoneService;
import br.com.rodrigo.contacts.domain.application.IPhoneAppService;
import br.com.rodrigo.contacts.domain.model.Phone;

@Service
public class PhoneAppService implements IPhoneAppService {
	
	private PhoneService service;
	
	@Autowired
	public PhoneAppService(PhoneService service) {
		this.service = service;
	}

	@Override
	public Page<Phone> findAll(Integer page, Integer size) {
		return service.findAll(page, size);
	}

	@Override
	public Phone save(Phone entity) {
		return service.save(entity);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public Phone findBy(Long id) {
		return service.findBy(id);
	}
	
	@Override
	public Collection<Phone> findAllBy(Long contactId) {
		return service.findAllBy(contactId);
	}

}
