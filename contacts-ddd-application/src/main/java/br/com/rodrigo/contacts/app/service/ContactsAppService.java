package br.com.rodrigo.contacts.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.app.service.BaseAppService;
import br.com.rodrigo.contacts.domain.model.Contact;
import br.com.rodrigo.contacts.domain.model.Phone;
import br.com.rodrigo.contacts.domain.service.dto.ContactDto;
import br.com.rodrigo.contacts.service.ContactService;

@Service
public class ContactsAppService implements BaseAppService<ContactDto> {

	private final ContactService service;
	private final Mapper mapper;

	@Autowired
	public ContactsAppService(ContactService service, Mapper mapper) {
		this.service = service;
		this.mapper = mapper; 
	}

	@Override
	public Collection<ContactDto> findAll(Integer page, Integer size) {
		Collection<Contact> contacts = service.findAll(page, size);
		
		return contacts
				.stream()
				.map(contact -> mapper.map(contact, ContactDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ContactDto save(ContactDto entity) {
		
		Contact contact = mapper.map(entity, Contact.class);
		
		if (contact.getPhones() != null) {
			for(Phone phone : contact.getPhones()) {
				if (phone.getId() == 0) {
					phone.setContact(contact);
				}
			}
		}
		
		return mapper.map(service.save(contact), ContactDto.class);

	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public ContactDto findBy(Long id) {
		return mapper.map(service.findBy(id), ContactDto.class);
	}

}
