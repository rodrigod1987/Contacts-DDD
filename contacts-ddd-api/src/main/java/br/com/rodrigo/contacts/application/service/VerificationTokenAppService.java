package br.com.rodrigo.contacts.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.service.VerificationTokenService;
import br.com.rodrigo.contacts.domain.application.IVerificationTokenAppService;
import br.com.rodrigo.contacts.domain.model.VerificationToken;

@Service
public class VerificationTokenAppService implements IVerificationTokenAppService {
	
	private VerificationTokenService service;
	
	@Autowired
	public VerificationTokenAppService(VerificationTokenService service) {
		this.service = service;
	}
	
	@Override
	public Page<VerificationToken> findAll(Integer page, Integer size) {
		return this.service.findAll(page, size);
	}

	@Override
	public VerificationToken save(VerificationToken entity) {
		return this.save(entity);
	}

	@Override
	public void delete(Long id) {
		this.service.delete(id);
	}

	@Override
	public VerificationToken findBy(Long id) {
		return this.service.findBy(id);
	}

}
