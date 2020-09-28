package br.com.rodrigo.contacts.domain.repository;

import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.Contact;

@NoRepositoryBean
public interface IContactRepository extends BaseRepository<Contact> {

}
