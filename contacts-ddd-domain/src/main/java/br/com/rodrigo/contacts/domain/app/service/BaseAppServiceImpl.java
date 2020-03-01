package br.com.rodrigo.contacts.domain.app.service;

import java.util.Collection;

import br.com.rodrigo.contacts.domain.service.BaseService;

public class BaseAppServiceImpl<T extends BaseService<E>, E> implements BaseAppService<E> {
	
	private T service;
	
	public BaseAppServiceImpl(T service) {
		this.service = service;
	}
	
	public Collection<E> findAll() {
		return service.findAll();
	}
	
	public E save(E entity) {
		return service.save(entity);
	}
	
	public void delete(Long id) {
		service.delete(id);
	}
	
	public E findBy(Long id) {
		return service.findBy(id);
	}

}
