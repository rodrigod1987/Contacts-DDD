package br.com.rodrigo.contacts.api.controller;

import java.util.Collection;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.app.service.PhoneAppService;
import br.com.rodrigo.contacts.domain.model.Phone;

@RestController
@RequestMapping("/api/v1/phones")
public class PhoneController {
	
	private PhoneAppService phoneAppService;

	@Autowired
	public PhoneController(PhoneAppService phoneAppService) {
		this.phoneAppService = phoneAppService;
	}
	
	@GetMapping(params = { "contact", "page", "size" })
	public ResponseEntity<Page<Phone>> getAll(
			@PathParam("contactId") Long contactId,
			@RequestParam(defaultValue = "0") Integer page, 
            @RequestParam(defaultValue = "10") Integer size) {
		return new ResponseEntity<>(phoneAppService.findAll(page, size), HttpStatus.OK);
	}
	
	@GetMapping(params = "contactId")
	public Collection<Phone> getAllBy(@RequestParam("contactId") Long contactId) {
		return phoneAppService.findAllBy(contactId);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Phone> get(@PathVariable Long id) {
		return new ResponseEntity<>(phoneAppService.findBy(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Phone> post(@RequestBody Phone phoneDto) {
		return new ResponseEntity<>(phoneAppService.save(phoneDto), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Phone> put(@PathVariable Long id, @RequestBody Phone phoneDto) {
		return new ResponseEntity<>(phoneAppService.save(phoneDto), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		phoneAppService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
