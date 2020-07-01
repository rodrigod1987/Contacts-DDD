package br.com.rodrigo.contacts.domain.application;

import org.springframework.data.domain.Page;

/**
 * @author rodrigo.duarte
 *
 * @param <T>
 */
public interface BaseAppService<T> {

	
	/**
	 * Get all records of T and return it paging
	 * @param page
	 * @param size
	 * @return
	 */
	Page<T> findAll(Integer page, Integer size);

	/**
	 * Save the register of type T at the database
	 * @param entity
	 * @return
	 */
	T save(T entity);

	/**
	 * Delete the register at the database 
	 * @param id
	 */
	void delete(Long id);

	/**
	 * Get the register of the type T from database
	 * @param id
	 * @return
	 */
	T findBy(Long id);

}