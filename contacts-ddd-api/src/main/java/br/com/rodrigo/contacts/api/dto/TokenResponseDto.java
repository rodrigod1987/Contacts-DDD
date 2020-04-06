package br.com.rodrigo.contacts.api.dto;

import java.io.Serializable;
import java.util.Date;

public class TokenResponseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8322022718970238518L;
	private String userName;
	private boolean authenticated;
	private Date expiresOn;
	private String message;
	private String token;
	
	public TokenResponseDto(String userName,
			boolean authenticated, 
			Date expiresOn,
			String message,
			String token) {
		this.userName = userName;
		this.authenticated = authenticated;
		this.expiresOn = expiresOn;
		this.message = message;
		this.token = token;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public boolean isAuthenticated() {
		return authenticated;
	}
	
	public Date getExpiresOn() {
		return expiresOn;
	}
	
	public String getMessage() {
		return message;
	}

	public String getToken() {
		return token;
	}
	
}
