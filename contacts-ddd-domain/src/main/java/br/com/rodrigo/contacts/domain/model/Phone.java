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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long number;
	private Type type;
	@ManyToOne
	@JoinColumn(name = "contactId", nullable = false)
	private Contact contact;
	
	public Phone() { }
	
	public Phone(long number, Type type) {
		this.number = number;
		this.type = type;
	}

	public long getId() {
		return id;
	}
	
	public long getNumber() {
		return number;
	}
	
	public Type getType() {
		return type;
	}
	
	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact entity) {
		this.contact = entity;
	}
}
