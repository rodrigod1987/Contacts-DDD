package br.com.rodrigo.contacts.data.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.exception.UserDeleteException;
import br.com.rodrigo.contacts.data.exception.UserHasBeenRegisteredException;
import br.com.rodrigo.contacts.data.exception.UserNotEnabledException;
import br.com.rodrigo.contacts.data.exception.UserNotFoundException;
import br.com.rodrigo.contacts.data.repository.ApplicationUserRepository;
import br.com.rodrigo.contacts.domain.model.User;
import br.com.rodrigo.contacts.domain.service.IApplicationUserService;

@Service
public class ApplicationUserService implements IApplicationUserService {
	
	private ApplicationUserRepository repository;
	
	@Autowired
	public ApplicationUserService(ApplicationUserRepository repository) {
		this.repository = repository;
	}

	@Override
	public Page<User> findAll(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return repository.findAll(paging);
	}

	@Override
	public User save(User entity) {
		try {
			return repository.save(entity);
		} catch (Exception e) {
			throw new UserHasBeenRegisteredException(entity.getUsername(), e);
		}
	}

	@Override
	public void delete(Long id) {
		Optional<User> user = repository.findById(id);
		
		if (user.isPresent())
			repository.delete(user.get());
		
		throw new UserDeleteException();
	}

	@Override
	public User findBy(Long id) {
		Optional<User> user = repository.findById(id);
		
		if (user.isPresent()) {
			return user.get();
		}
		
		throw new UserNotFoundException(id);
	}

	@Override
	public User findByUsername(String username) {
		Optional<User> user = repository.findByUsername(username);
		
		if (!user.isPresent()) {
			throw new UserNotFoundException(username);
        }
		
		user = user.filter(u -> u.isEnabled());
		
		if (user.isPresent())
			return user.get();

		throw new UserNotEnabledException(username);
	}

}
