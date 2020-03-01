package br.com.rodrigo.contacts.app.service.dto;

import java.util.Collection;

public class ContactDto {

	private long id;
	private String name;
	private Collection<PhoneDto> phones;
		
	public long getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public Collection<PhoneDto> getPhones() {
		return phones; 
	}
	
}
