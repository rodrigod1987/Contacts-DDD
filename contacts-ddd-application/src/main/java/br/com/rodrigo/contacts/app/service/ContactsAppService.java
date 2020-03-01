package br.com.rodrigo.contacts.app.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.app.service.dto.ContactDto;
import br.com.rodrigo.contacts.domain.app.service.BaseAppService;

@Service
public class ContactsAppService implements BaseAppService<ContactDto> {

	//private ContactService service;
	//private ModelMapperBean modelMapper;
	
	//@Autowired
	
	//public ContactsAppService(ContactService service) { //,
			//ModelMapperBean modelMapper) {
	//	this.service = service;
		//this.modelMapper = modelMapper;
	//}

	@Override
	public Collection<ContactDto> findAll() {
		//Collection<Contact> contacts = service.findAll();
//		return contacts
//				.stream()
//				.map(contact -> modelMapper.)
		return null;
	}

	@Override
	public ContactDto save(ContactDto entity) {
		
//		return service.save(entity);
		
		return null;
	}

	public void delete(Long id) {
		//service.delete(id);
		//return;
	}

	@Override
	public ContactDto findBy(Long id) {
//		return service.findBy(id);
		return null;
	}

}
