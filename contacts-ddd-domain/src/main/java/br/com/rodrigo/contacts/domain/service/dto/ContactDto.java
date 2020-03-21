package br.com.rodrigo.contacts.domain.service.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@JsonInclude(value = Include.NON_NULL)
public class ContactDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 998821612934787199L;
	private long id;
	private String name;
	@JsonManagedReference
	private List<PhoneDto> phones;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<PhoneDto> getPhones() {
		return phones;
	}

	public void setPhones(List<PhoneDto> phones) {
		this.phones = phones;
	}

}
