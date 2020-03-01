package br.com.rodrigo.contacts.domain.exception;

public class InvalidNameException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -94510155987857627L;
	private static final String MESSAGE = "Attribute 'name' could not be null.".concat(System.lineSeparator());
	
	public InvalidNameException() {
		super(MESSAGE);
	}
	
	public InvalidNameException(String description) {
		super(MESSAGE.concat(description));
	}

}
