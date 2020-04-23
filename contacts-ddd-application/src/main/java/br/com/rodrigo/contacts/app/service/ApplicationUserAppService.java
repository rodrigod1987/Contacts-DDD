package br.com.rodrigo.contacts.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.app.service.ApplicationUserAppServiceIntf;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.service.ApplicationUserServiceIntf;

@Service
public class ApplicationUserAppService implements ApplicationUserAppServiceIntf {

	private ApplicationUserServiceIntf service;
	
	@Autowired
	public ApplicationUserAppService(ApplicationUserServiceIntf service) {
		this.service = service;
	}

	@Override
	public Page<ApplicationUser> findAll(Integer page, Integer size) {
		return service.findAll(page, size);
	}

	@Override
	public ApplicationUser save(ApplicationUser entity) {
		return service.save(entity);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public ApplicationUser findBy(Long id) {
		return service.findBy(id);
	}

	@Override
	public ApplicationUser findByUsername(String username) {
		return service.findByUsername(username);
	}

}
