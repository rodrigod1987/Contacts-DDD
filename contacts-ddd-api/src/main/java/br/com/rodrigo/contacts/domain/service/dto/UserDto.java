package br.com.rodrigo.contacts.domain.service.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
public class UserDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -930771860374609159L;
	private long id;
	private String userName;
	private String password;
	private boolean active;
	
	public UserDto() { }

	public long getId() {
		return id;
	}

	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String encode) {
		this.password = encode;
	}

	public boolean isActive() {
		return active;
	}

}
