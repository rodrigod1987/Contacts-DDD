package br.com.rodrigo.contacts.domain.service.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import br.com.rodrigo.contacts.domain.model.PhoneType;

@JsonInclude(value = Include.NON_NULL)
public class PhoneDto implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5967855942607751674L;
	private long id;
	private long number;
	private PhoneType type;
	@JsonBackReference
	private ContactDto contact;
		
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public long getNumber() {
		return number;
	}
	
	public void setNumber(long number) {
		this.number = number;
	}
	
	public PhoneType getType() {
		return type;
	}
	
	public void setType(PhoneType type) {
		this.type = type;
	}
	
	public ContactDto getContact() {
		return contact;
	}
	
	public void setContact(ContactDto contact) {
		this.contact = contact;
	}

}
