package br.com.rodrigo.contacts.domain.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.Phone;

@NoRepositoryBean
public interface IPhoneRepository extends BaseRepository<Phone> {

	Page<Phone> findByContactId(Long contactId, Pageable paging);
	
}
