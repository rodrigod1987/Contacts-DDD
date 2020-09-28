package br.com.rodrigo.contacts.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.service.ContactService;
import br.com.rodrigo.contacts.domain.application.IContactsAppService;
import br.com.rodrigo.contacts.domain.model.Contact;
import br.com.rodrigo.contacts.domain.model.Phone;

@Service
public class ContactsAppService implements IContactsAppService {

	private final ContactService service;

	@Autowired
	public ContactsAppService(ContactService service) {
		this.service = service;
	}

	@Override
	public Page<Contact> findAll(Integer page, Integer size) {
		return service.findAll(page, size);
	}

	@Override
	public Contact save(Contact entity) {
		
		if (entity.getPhones() != null) {
			for(Phone phone : entity.getPhones()) {
				if (phone.getId() == 0) {
					phone.setContact(entity);
				}
			}
		}
		
		return service.save(entity);

	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public Contact findBy(Long id) {
		return service.findBy(id);
	}

}
