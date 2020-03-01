package br.com.rodrigo.contacts.domain.data.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;

public interface BaseRepository<E> extends CrudRepository<E, Long> {
	
	Collection<E> findAll();
	
	void deleteById(Long id);

}
