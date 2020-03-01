package br.com.rodrigo.contacts.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.repository.ContactRepository;
import br.com.rodrigo.contacts.domain.model.Contact;
import br.com.rodrigo.contacts.domain.service.BaseServiceImpl;

@Service
public class ContactService extends BaseServiceImpl<ContactRepository, Contact> {

	private ContactRepository repository;

	@Autowired
	public ContactService(ContactRepository repository) {
		super(repository);
		this.repository = repository;
	}

	@Override
	public Collection<Contact> findAll() {
		return repository.findAll();
	}

	@Override
	public Contact save(Contact entity) {

		// para adicionar no grafo caso não esteja adicionado ainda
		if (entity.getPhones().size() > 0) {
			entity.getPhones()
				.stream()
				.forEach(phone -> {
					if (phone.getId() == 0) {
						phone.setContact(entity);
					}
				});
		}

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

		if (contact.isPresent())
			return contact.get();

		return null;
	}

}
