package br.com.rodrigo.contacts.api.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.rodrigo.contacts.api.security.JwtToken;
import br.com.rodrigo.contacts.api.services.UserDetailsService;
import br.com.rodrigo.contacts.domain.model.User;
import io.jsonwebtoken.ExpiredJwtException;

@Component
@Order(2)
public class AuthenticationFilter extends OncePerRequestFilter {
	
	private UserDetailsService userDetailsService;
	private JwtToken jwtToken;
	
	@Autowired
	public AuthenticationFilter(UserDetailsService userDetailsService, 
			JwtToken jwtToken) {
		this.userDetailsService = userDetailsService;
		this.jwtToken = jwtToken;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, 
			HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		
		String header = request.getHeader("Authorization");
		
		if (header != null) {
			JwtRequest jwtRequest = extractJWTfrom(header);
					
			if (jwtRequest != null)
				authenticateRequest(request, jwtRequest);
		}
		
		filterChain.doFilter(request, response);
		
	}

	private void authenticateRequest(HttpServletRequest request, JwtRequest jwtRequest) {
		
		if (request.getHeader("Authorization") == null) {
			SecurityContextHolder.getContext().setAuthentication(null);
			return;
		}
		
		UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getUsername());
		User user = userDetailsService.findBy(jwtRequest.getUsername());
		
		if (jwtToken.isValid(jwtRequest.getToken(), userDetails)) {
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, 
					userDetails, 
					userDetails.getAuthorities());
			
			usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource()
					.buildDetails(request));
			
			SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
		}
		
	}

	private JwtRequest extractJWTfrom(String header) {

		if (header.startsWith("Bearer ")) {
			try {
				
				String token = header.substring(7);
				String username = jwtToken.getUserNameFrom(token);
				
				return new JwtRequest(username, token);
				
			} catch(IllegalArgumentException iae) {
				System.out.println("Unable to get JWT Token.");
			} catch(ExpiredJwtException eje) {
				System.out.println("JWT Token has expired.");
			}
		} else {
			logger.warn("JWT Token does not begin with Bearer String");
		}
		
		return null;
	}
	
	class JwtRequest {
		
		String username;
		String token;
		
		public JwtRequest(String username, String token) {
			this.username = username;
			this.token = token;
		}
		
		public String getUsername() {
			return username;
		}
		
		public String getToken() {
			return token;
		}
		
	}
	
}
