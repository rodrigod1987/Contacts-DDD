package br.com.rodrigo.contacts.app.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.app.service.BaseAppService;
import br.com.rodrigo.contacts.domain.model.Phone;
import br.com.rodrigo.contacts.service.PhoneService;

@Service
public class PhoneAppService implements BaseAppService<Phone> {
	
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
	
	public Collection<Phone> findAllBy(Long contactId) {
		return service.findAllBy(contactId);
	}

}
