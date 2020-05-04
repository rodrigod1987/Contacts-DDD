package br.com.rodrigo.contacts.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.ApplicationUser;

@NoRepositoryBean
public interface IApplicationUserRepository extends BaseRepository<ApplicationUser> {

	Optional<ApplicationUser> findByUsername(String username);
	
}
