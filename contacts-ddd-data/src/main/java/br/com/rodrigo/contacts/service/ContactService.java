package br.com.rodrigo.contacts.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.repository.ContactRepository;
import br.com.rodrigo.contacts.domain.model.Contact;
import br.com.rodrigo.contacts.domain.service.BaseService;

@Service
public class ContactService implements BaseService<Contact> {

	private ContactRepository repository;

	@Autowired
	public ContactService(ContactRepository repository) {
		this.repository = repository;
	}

	@Override
	public Collection<Contact> findAll() {
		return repository.findAll();
	}

	@Override
	public Contact save(Contact entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(Long id) {
		Optional<Contact> contact = repository.findById(id);

		if (contact.isPresent()) {
			repository.delete(contact.get());
		}
	}

	@Override
	public Contact findBy(Long id) {
		Optional<Contact> contact = repository.findById(id);

		if (contact.isPresent()) {
			return contact.get();
		}

		return null;
	}

}
