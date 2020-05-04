package br.com.rodrigo.contacts.domain.repository;

import org.springframework.data.repository.NoRepositoryBean;

import br.com.rodrigo.contacts.domain.model.VerificationToken;

@NoRepositoryBean
public interface IVerificationTokenRepository extends BaseRepository<VerificationToken> {

	VerificationToken findByToken(String token);

}
