package br.com.rodrigo.contacts.domain.repository;

import java.util.Optional;

import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.User;

@NoRepositoryBean
public interface IApplicationUserRepository extends BaseRepository<User> {

	Optional<User> findByUsername(String username);
	
	Optional<User> findByEmail(String email);
		
}
