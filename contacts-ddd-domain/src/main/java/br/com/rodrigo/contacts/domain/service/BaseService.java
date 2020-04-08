package br.com.rodrigo.contacts.domain.service;

import java.util.Collection;

public interface BaseService<T> {

	Collection<T> findAll(Integer page, Integer size);

	T save(T entity);

	void delete(Long id);

	T findBy(Long id);

}