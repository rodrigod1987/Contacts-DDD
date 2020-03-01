package br.com.rodrigo.contacts.domain.model;

import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	@OneToMany(mappedBy = "contact", cascade = CascadeType.ALL)
	private Collection<Phone> phones;
	
	public Contact() { }

	private Contact(ContactBuilder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.phones = builder.phones;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	
	public Collection<Phone> getPhones() {
		return Collections.unmodifiableCollection(phones);
	}

	public static class ContactBuilder {

		long id;
		String name;
		Collection<Phone> phones;

		private ContactBuilder() {
			this.phones = new LinkedList<>();
		}

		public static final ContactBuilder instance = new ContactBuilder();

		public ContactBuilder withName(String name) {
			this.name = name;
			return this;
		}

		public ContactBuilder withPhones(Collection<Phone> phones) {
			this.phones = phones;
			return this;
		}

		public Contact build() {
			return new Contact(this);
		}
	}

}
