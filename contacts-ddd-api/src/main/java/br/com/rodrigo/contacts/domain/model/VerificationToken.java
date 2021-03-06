package br.com.rodrigo.contacts.domain.model;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity(name = "VerificationToken_TBL")
public class VerificationToken {
    private static final int EXPIRATION = 60 * 24;
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
     
    private String token;
   
    @OneToOne
    private User user;
     
    private Date expiryDate;
    
    public VerificationToken() { }
    
    public VerificationToken(User user, String token) {
		this.user = user;
		this.token = token;
		this.expiryDate = calculateExpiryDate(EXPIRATION);
	}

	private Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }
     
    public Long getId() {
		return id;
	}
    
    public String getToken() {
		return token;
	}
    
    public User getUser() {
		return user;
	}
    
    public Date getExpiryDate() {
		return expiryDate;
	}
    
}