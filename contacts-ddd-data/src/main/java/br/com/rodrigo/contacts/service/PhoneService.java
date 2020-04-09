package br.com.rodrigo.contacts.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.data.repository.PhoneRepository;
import br.com.rodrigo.contacts.domain.model.Phone;
import br.com.rodrigo.contacts.domain.service.BaseService;

@Service
public class PhoneService implements BaseService<Phone> {

	private PhoneRepository repository;
	
	@Autowired
	public PhoneService(PhoneRepository repository) {
		this.repository = repository;
	}

	@Override
	public Page<Phone> findAll(Integer page, Integer size) {
		Pageable paging = PageRequest.of(page, size);
		return repository.findAll(paging); 
	}

	@Override
	public Phone save(Phone entity) {
		return repository.save(entity);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Phone findBy(Long id) {
		Optional<Phone> phone = repository.findById(id);
		
		if (phone.isPresent()) {
			return phone.get(); 
		}
		
		return null;
	}
	
	

}
