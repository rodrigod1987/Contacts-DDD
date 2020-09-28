package br.com.rodrigo.contacts.data.exception;

public class UserDeleteException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7621068862009690941L;
	private static String message = "User doesn't deleted because was not found.";
	private static String messageWithUsername = "User %s doesn't deleted because was not found.";
	
	public UserDeleteException() {
		super(message);
	}
	
	public UserDeleteException(String username) {
		super(String.format(messageWithUsername, username));
	}

}
