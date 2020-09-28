package br.com.rodrigo.contacts.api.controller;

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

import br.com.rodrigo.contacts.application.service.ContactsAppService;
import br.com.rodrigo.contacts.domain.application.IContactsAppService;
import br.com.rodrigo.contacts.domain.model.Contact;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {

	private IContactsAppService appService;

	@Autowired
	public ContactController(ContactsAppService appService) {
		this.appService = appService;
	}

	@GetMapping
	@ApiOperation(value = "Retorna a lista de Contatos")
	@ApiResponses(value = {
		    @ApiResponse(code = 200, message = "Requisiçãoo realizada com sucesso."),
		    @ApiResponse(code = 401, message = "Você não tem permissão para acessar este recurso."),
		    @ApiResponse(code = 403, message = "Acesso proibido."),
		    @ApiResponse(code = 404, message = "Recurso não encontrado."),
		    @ApiResponse(code = 500, message = "Foi gerada uma exceção não tratada no servidor."),
		})
	public ResponseEntity<Page<Contact>> getAll(
			@RequestParam(defaultValue = "0") Integer page, 
            @RequestParam(defaultValue = "10") Integer size) {
		return new ResponseEntity<>(appService.findAll(page, size), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Contact> get(@PathVariable Long id) {
		return new ResponseEntity<>(appService.findBy(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Contact> create(@RequestBody Contact contact) {
		return new ResponseEntity<>(appService.save(contact), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Contact> update(@PathVariable Long id, @RequestBody Contact contact) {
		return new ResponseEntity<>(appService.save(contact), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		appService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
