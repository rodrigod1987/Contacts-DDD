package br.com.rodrigo.contacts.domain.service;

import java.util.Collection;
import java.util.Optional;

import br.com.rodrigo.contacts.domain.data.repository.BaseRepository;

public class BaseServiceImpl<R extends BaseRepository<E>, E> implements BaseService<E> {
	
	private R repository;
	
	public BaseServiceImpl(R repository) {
		this.repository = repository;
	}
	
	public Collection<E> findAll() {
		return repository.findAll();
	}
	
	public E save(E entity) {
		return repository.save(entity);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public E findBy(Long id) {
		Optional<E> entity = repository.findById(id);
		
		if (entity.isPresent())
			return entity.get();
		
		return null;
	}

}
