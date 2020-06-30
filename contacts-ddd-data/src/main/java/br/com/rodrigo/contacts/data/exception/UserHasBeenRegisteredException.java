package br.com.rodrigo.contacts.data.exception;

public class UserHasBeenRegisteredException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4727913672254440551L;
	private static String message = "User already been registered with the given e-mail.";
	private static String messageWithUser = "User %s already been registered with the given e-mail.";

	public UserHasBeenRegisteredException() {
		super(message);
	}
	
	public UserHasBeenRegisteredException(String username) {
		super(String.format(messageWithUser, username));
	}
	
	public UserHasBeenRegisteredException(Long id) {
		super(String.format(messageWithUser, id));
	}
	
	public UserHasBeenRegisteredException(Throwable cause) {
		super(message, cause);
	}
	
	public UserHasBeenRegisteredException(String username, Throwable cause) {
		super(String.format(messageWithUser, username), cause);
	}

}
