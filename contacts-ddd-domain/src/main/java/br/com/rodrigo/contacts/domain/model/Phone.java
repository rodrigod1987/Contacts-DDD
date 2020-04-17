package br.com.rodrigo.contacts.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Phone {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long number;
	private PhoneType type;
	@ManyToOne
	@JoinColumn(name = "contactId", nullable = false)
	private Contact contact;

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
	
	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact entity) {
		this.contact = entity;
	}
}
