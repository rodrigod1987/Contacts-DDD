package br.com.rodrigo.contacts.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.app.service.ApplicationUserAppServiceIntf;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.service.ApplicationUserServiceIntf;
import br.com.rodrigo.contacts.domain.service.dto.ApplicationUserDto;

@Service
public class ApplicationUserAppService implements ApplicationUserAppServiceIntf{

	private Mapper mapper;
	private ApplicationUserServiceIntf service;
	
	@Autowired
	public ApplicationUserAppService(Mapper mapper,
			ApplicationUserServiceIntf service) {
		this.mapper = mapper;
		this.service = service;
	}

	@Override
	public Collection<ApplicationUserDto> findAll() {
		return service.findAll()
				.stream()
				.map(user -> mapper.map(user, ApplicationUserDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApplicationUserDto save(ApplicationUserDto entity) {
		return mapper.map(service.save(mapper.map(entity, ApplicationUser.class)), ApplicationUserDto.class);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public ApplicationUserDto findBy(Long id) {
		return mapper.map(service.findBy(id), ApplicationUserDto.class);
	}

	@Override
	public ApplicationUserDto findByUserName(String userName) {
		return mapper.map(service.findByUserName(userName), ApplicationUserDto.class);
	}

}
