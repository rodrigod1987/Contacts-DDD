package br.com.rodrigo.contacts.domain.repository;

import java.util.Collection;

import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.Phone;

@NoRepositoryBean
public interface IPhoneRepository extends BaseRepository<Phone> {

	Collection<Phone> findByContactId(Long contactId);
	
}
