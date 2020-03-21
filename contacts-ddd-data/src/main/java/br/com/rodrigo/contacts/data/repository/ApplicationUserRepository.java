package br.com.rodrigo.contacts.data.repository;

import java.util.Optional;

import br.com.rodrigo.contacts.domain.data.repository.BaseRepository;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;

public interface ApplicationUserRepository extends BaseRepository<ApplicationUser> {
	
	Optional<ApplicationUser> findByUserName(String userName);

}
