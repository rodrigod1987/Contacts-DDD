package br.com.rodrigo.contacts.api.configuration;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtToken implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7932724988675505325L;

	private static final  long JWT_TOKEN_VALIDITY =  5 * 60 * 60 * 1000;
	
	private final String secret = "contactsddd";
	
	public String getUserNameFrom(String token) {
		return getClaimFrom(token, t -> t.getSubject());
	}
	
	public Date getExpirationFrom(String token) {
		return getClaimFrom(token, t -> t.getExpiration());
	}
	
	public <T> T getClaimFrom(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFrom(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims getAllClaimsFrom(String token) {
		return Jwts.parser().setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody();
	}
	
	private boolean isExpired(String token) {
		final Date expiration = getExpirationFrom(token);
		return expiration.before(new Date());
	}
	
	public String generate(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return generateToken(claims, userDetails.getUsername());
	}
	
	private String generateToken(Map<String, Object> claims, String subject) {
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
	
	public boolean isValid(String token, UserDetails userDetails) {
		final String username = getUserNameFrom(token);
		return username.equals(userDetails.getUsername()) && !isExpired(token);
	}

}
