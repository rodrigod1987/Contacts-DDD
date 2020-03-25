package br.com.rodrigo.contacts.api.dto;

import java.io.Serializable;

public class TokenResponseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8322022718970238518L;
	private String userName;
	private String token;
	
	public TokenResponseDto(String userName, String token) {
		this.userName = userName;
		this.token = token;
	}

	public String getUserName() {
		return userName;
	}
	
	public String getToken() {
		return token;
	}
	
}
