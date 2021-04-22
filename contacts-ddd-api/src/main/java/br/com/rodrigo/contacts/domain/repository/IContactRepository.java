package br.com.rodrigo.contacts.domain.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.Contact;

@NoRepositoryBean
public interface IContactRepository extends BaseRepository<Contact> {
	
	Page<Contact> findByUserId(Long userId, Pageable paging);

}
