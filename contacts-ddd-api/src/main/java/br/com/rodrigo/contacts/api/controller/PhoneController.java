package br.com.rodrigo.contacts.api.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rodrigo.contacts.app.service.PhoneAppService;
import br.com.rodrigo.contacts.app.service.dto.PhoneDto;

@RestController
@RequestMapping("/api/v1/phones")
public class PhoneController {
	
	private PhoneAppService phoneAppService;

	@Autowired
	public PhoneController(PhoneAppService phoneAppService) {
		this.phoneAppService = phoneAppService;
	}
	
	@GetMapping
	public ResponseEntity<Collection<PhoneDto>> getAll() {
		return new ResponseEntity<>(phoneAppService.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<PhoneDto> get(@PathVariable Long id) {
		return new ResponseEntity<>(phoneAppService.findBy(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<PhoneDto> post(@RequestBody PhoneDto phoneDto) {
		return new ResponseEntity<>(phoneAppService.save(phoneDto), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<PhoneDto> put(@PathVariable Long id, @RequestBody PhoneDto phoneDto) {
		return new ResponseEntity<>(phoneAppService.save(phoneDto), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		phoneAppService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
