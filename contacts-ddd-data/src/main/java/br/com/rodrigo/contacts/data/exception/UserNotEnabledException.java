package br.com.rodrigo.contacts.data.exception;

public class UserNotEnabledException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5956663477968672438L;
	private static String message = "User was not enabled yet.";
	private static String messageWithUser = "User %s was not enabled yet.";

	public UserNotEnabledException() {
		super(message);
	}
	
	public UserNotEnabledException(String username) {
		super(String.format(messageWithUser, username));
	}
	
	public UserNotEnabledException(Throwable cause) {
		super(cause);
	}
	
	public UserNotEnabledException(String username, Throwable cause) {
		super(message, cause);
	}

}
