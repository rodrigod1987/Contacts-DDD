package br.com.rodrigo.contacts.domain.model;

public enum PhoneType {
	
	PRIVATE("Private"),
	ENTERPRISE("Enterprise"),
	NONE("None");
	
	private String type;
	
	PhoneType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}

}
