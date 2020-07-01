package br.com.rodrigo.contacts.data.exception;

public class UserNotFoundException extends RuntimeException {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5610292859488615847L;
	private static String message = "User was not found.";
	private static String messageWithUser = "User %s was not found.";

	public UserNotFoundException() {
		super(message);
	}
	
	public UserNotFoundException(String username) {
		super(String.format(messageWithUser, username));
	}
	
	public UserNotFoundException(Long id) {
		super(String.format(messageWithUser, id));
	}
	
	public UserNotFoundException(Throwable cause) {
		super(message, cause);
	}
	
	public UserNotFoundException(String username, Throwable cause) {
		super(message, cause);
	}
	
}
