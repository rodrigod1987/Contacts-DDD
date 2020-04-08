package br.com.rodrigo.contacts.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.app.service.BaseAppService;
import br.com.rodrigo.contacts.domain.model.Phone;
import br.com.rodrigo.contacts.domain.service.dto.PhoneDto;
import br.com.rodrigo.contacts.service.PhoneService;

@Service
public class PhoneAppService implements BaseAppService<PhoneDto> {
	
	private Mapper mapper;
	private PhoneService service;
	
	@Autowired
	public PhoneAppService(Mapper mapper, 
			PhoneService service) {
		this.mapper = mapper;
		this.service = service;
	}

	@Override
	public Collection<PhoneDto> findAll(Integer page, Integer size) {
		Collection<Phone> phones = service.findAll(page, size);
		
		return phones
				.stream()
				.map(phone -> mapper.map(phone, PhoneDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public PhoneDto save(PhoneDto entity) {
		return mapper.map(service.save(mapper.map(entity, Phone.class)), PhoneDto.class);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public PhoneDto findBy(Long id) {
		return mapper.map(service.findBy(id), PhoneDto.class);
	}

}
