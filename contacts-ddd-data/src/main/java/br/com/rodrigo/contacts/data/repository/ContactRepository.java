package br.com.rodrigo.contacts.data.repository;

import org.springframework.stereotype.Repository;

import br.com.rodrigo.contacts.domain.data.repository.BaseRepository;
import br.com.rodrigo.contacts.domain.model.Contact;

@Repository
public interface ContactRepository extends BaseRepository<Contact> {
		
}
