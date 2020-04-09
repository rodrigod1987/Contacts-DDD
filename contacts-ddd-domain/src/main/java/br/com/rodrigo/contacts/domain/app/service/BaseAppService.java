package br.com.rodrigo.contacts.domain.app.service;

import org.springframework.data.domain.Page;

public interface BaseAppService<T> {

	Page<T> findAll(Integer page, Integer size);

	T save(T entity);

	void delete(Long id);

	T findBy(Long id);

}