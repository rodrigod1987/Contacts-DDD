package br.com.rodrigo.contacts.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.repository.ApplicationUserRepository;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.service.ApplicationUserServiceIntf;
import br.com.rodrigo.contacts.service.exception.ApplicationUserDeleteException;

@Service
public class ApplicationUserService implements ApplicationUserServiceIntf {
	
	private ApplicationUserRepository repository;
	
	@Autowired
	public ApplicationUserService(ApplicationUserRepository repository) {
		this.repository = repository;
	}

	@Override
	public Collection<ApplicationUser> findAll() {
		return repository.findAll();
	}

	@Override
	public ApplicationUser save(ApplicationUser entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(Long id) {
		Optional<ApplicationUser> user = repository.findById(id);
		
		if (user.isPresent())
			repository.delete(user.get());
		
		throw new ApplicationUserDeleteException("O usuário não foi excluído pois não foi localizado.");
	}

	@Override
	public ApplicationUser findBy(Long id) {
		Optional<ApplicationUser> user = repository.findById(id);
		
		if (user.isPresent())
			return user.get();
		
		return null;
	}

	@Override
	public ApplicationUser findByUserName(String userName) {
		Optional<ApplicationUser> user = repository.findByUserName(userName);
		
		if (user.isPresent())
			return user.get();
		
		return null;
	}

}
