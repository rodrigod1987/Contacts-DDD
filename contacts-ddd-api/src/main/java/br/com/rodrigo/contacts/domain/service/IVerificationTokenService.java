package br.com.rodrigo.contacts.domain.service;

import br.com.rodrigo.contacts.domain.model.VerificationToken;

public interface IVerificationTokenService extends BaseService<VerificationToken> {
	
	VerificationToken findByToken(String token);

}
