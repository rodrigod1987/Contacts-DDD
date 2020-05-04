package br.com.rodrigo.contacts.data.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import br.com.rodrigo.contacts.domain.model.VerificationToken;
import br.com.rodrigo.contacts.domain.repository.IVerificationTokenRepository;
import br.com.rodrigo.contacts.domain.service.IVerificationTokenService;

public class VerificationTokenService implements IVerificationTokenService {

	private IVerificationTokenRepository repository;
	
	@Autowired
	public VerificationTokenService(IVerificationTokenRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public Page<VerificationToken> findAll(Integer page, Integer size) {
		PageRequest pageable = PageRequest.of(page, size);
		return repository.findAll(pageable);
	}

	@Override
	public VerificationToken save(VerificationToken entity) {
		return this.repository.save(entity);
	}

	@Override
	public void delete(Long id) {
		this.repository.deleteById(id);
	}

	@Override
	public VerificationToken findBy(Long id) {
		Optional<VerificationToken> optional = this.repository.findById(id);
		
		if (optional.isPresent()) {
			return optional.get();
		}
		
		return null;
	}

	@Override
	public VerificationToken findByToken(String token) {
		return this.repository.findByToken(token);
	}

}
