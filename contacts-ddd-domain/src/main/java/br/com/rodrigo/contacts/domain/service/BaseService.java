package br.com.rodrigo.contacts.domain.service;

import org.springframework.data.domain.Page;

public interface BaseService<T> {

	Page<T> findAll(Integer page, Integer size);

	T save(T entity);

	void delete(Long id);

	T findBy(Long id);

}