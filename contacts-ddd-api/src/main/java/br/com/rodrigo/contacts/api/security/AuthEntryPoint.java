package br.com.rodrigo.contacts.api.security;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Component
public class AuthEntryPoint	implements AuthenticationEntryPoint, Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2088629291231867332L;

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		// 401
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, 
				"Unauthorized: " + authException.getMessage());
	}
	
	@ExceptionHandler(value = { BadCredentialsException.class })
	public void commence(HttpServletRequest request, HttpServletResponse response,
			BadCredentialsException badCredentialsException) throws IOException {
		// 400
		response.sendError(HttpServletResponse.SC_BAD_REQUEST,
				"Authorization Failed : " + badCredentialsException.getMessage());
	}

	@ExceptionHandler(value = { AccessDeniedException.class })
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException {
		// 403
		response.sendError(HttpServletResponse.SC_FORBIDDEN,
				"Authorization Failed : " + accessDeniedException.getMessage());
	}

	@ExceptionHandler(value = { Exception.class })
	public void commence(HttpServletRequest request, HttpServletResponse response, Exception exception)
			throws IOException {
		// 500
		response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
				"Internal Server Error : " + exception.getMessage());
	}

}
