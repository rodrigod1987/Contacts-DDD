package br.com.rodrigo.contacts.api.security;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import br.com.rodrigo.contacts.domain.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author rodrigo.duarte
 *
 *	Class responsible to generate a json web token (JWT)
 */
@Component
public class JwtToken implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7932724988675505325L;

	private static final  long JWT_TOKEN_VALIDITY = 60 * 60 * 1000;
	
	private final String secret = "contactsddd";
	
	/**
	 * Get the username content of a given token
	 * @param token
	 * @return
	 */
	public String getUserNameFrom(String token) {
		return getClaimFrom(token, t -> t.get("username", String.class));
	}
	
	
	/**
	 * Get the expiration date of a given token 
	 * @param token
	 * @return
	 */
	public Date getExpirationFrom(String token) {
		return getClaimFrom(token, t -> t.getExpiration());
	}
	
	private <T> T getClaimFrom(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFrom(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims getAllClaimsFrom(String token) {
		return Jwts.parser()
				.setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody();
	}
	
	private boolean isExpired(String token) {
		final Date expiration = getExpirationFrom(token);
		return expiration.before(new Date());
	}
	
	/**
	 * Generate the token based on the giver user details
	 * @param userDetails
	 * @return
	 */
	public String generate(User userDetails) {
		Map<String, Object> claims = new HashMap<>();
		
		claims.put("username", userDetails.getId());
		claims.put("username", userDetails.getUsername());
		claims.put("email", userDetails.getEmail());
		claims.put("birthdate", userDetails.getBirthdate());
		claims.put("createdOn", new Date(System.currentTimeMillis()).toString());
		claims.put("expiresOn", new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY).toString());
		
		return generateToken(claims);
	}
	
	private String generateToken(Map<String, Object> claims) {
		return Jwts.builder()
				.setClaims(claims)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
	
	/**
	 * Verify if the given token and user details are valid
	 * @param token
	 * @param userDetails
	 * @return
	 */
	public boolean isValid(String token, UserDetails userDetails) {
		final String username = getUserNameFrom(token);
		return username.equals(userDetails.getUsername()) && !isExpired(token);
	}

}
