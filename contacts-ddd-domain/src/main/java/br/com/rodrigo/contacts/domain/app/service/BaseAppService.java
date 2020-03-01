package br.com.rodrigo.contacts.domain.app.service;

import java.util.Collection;

public interface BaseAppService<T> {

	Collection<T> findAll();

	T save(T entity);

	void delete(Long id);

	T findBy(Long id);

}