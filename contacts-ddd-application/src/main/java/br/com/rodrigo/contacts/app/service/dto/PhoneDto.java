package br.com.rodrigo.contacts.app.service.dto;

import br.com.rodrigo.contacts.domain.model.Type;

public class PhoneDto {
	
	private long id;
	private long number;
	private Type type;
	private ContactDto contact;
		
	public long getId() {
		return id;
	}
	
	public long getNumber() {
		return number;
	}
	
	public Type getType() {
		return type;
	}
	
	public ContactDto getContact() {
		return contact;
	}

}
