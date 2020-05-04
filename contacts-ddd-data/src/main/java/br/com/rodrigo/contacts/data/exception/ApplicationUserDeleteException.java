package br.com.rodrigo.contacts.data.exception;

public class ApplicationUserDeleteException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7621068862009690941L;
	
	public ApplicationUserDeleteException() {
		super();
	}
	
	public ApplicationUserDeleteException(String message) {
		super(message);
	}

}
