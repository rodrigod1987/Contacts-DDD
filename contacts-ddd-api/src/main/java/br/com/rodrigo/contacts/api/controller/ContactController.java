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

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import br.com.rodrigo.contacts.app.service.ContactsAppService;
import br.com.rodrigo.contacts.app.service.dto.ContactDto;

@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {

	private ContactsAppService appService;

	@Autowired
	public ContactController(ContactsAppService appService) {
		this.appService = appService;
	}

	@GetMapping
	@ApiOperation(value = "Retorna a lista de Contatos")
	@ApiResponses(value = {
		    @ApiResponse(code = 200, message = "Requisição realizada com sucesso."),
		    @ApiResponse(code = 401, message = "Você não tem permissão para acessar este recurso."),
		    @ApiResponse(code = 403, message = "Acesso proibido."),
		    @ApiResponse(code = 404, message = "Recurso não encontrado."),
		    @ApiResponse(code = 500, message = "Foi gerada uma exceção."),
		})
	public ResponseEntity<Collection<ContactDto>> getAll() {
		return new ResponseEntity<>(appService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ContactDto> get(@PathVariable Long id) {
		return new ResponseEntity<>(appService.findBy(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<ContactDto> create(@RequestBody ContactDto contact) {
		return new ResponseEntity<>(appService.save(contact), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ContactDto> update(@PathVariable Long id, @RequestBody ContactDto contact) {
		return new ResponseEntity<>(appService.save(contact), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		appService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
