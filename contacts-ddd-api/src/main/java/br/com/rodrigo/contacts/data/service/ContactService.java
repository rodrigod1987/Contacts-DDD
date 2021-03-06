package br.com.rodrigo.contacts.data.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.repository.ContactRepository;
import br.com.rodrigo.contacts.domain.model.Contact;
import br.com.rodrigo.contacts.domain.model.User;
import br.com.rodrigo.contacts.domain.service.IContactService;

@Service
public class ContactService implements IContactService {
	
	private ContactRepository repository;
	
	@Autowired
	public ContactService(ContactRepository repository) {
		this.repository = repository;
	}

	@Override
	public Page<Contact> findAll(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return repository.findByUserId(principal.getId(), paging);
	}

	@Override
	public Contact save(Contact entity) {
		User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		entity.setUser(principal);
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
