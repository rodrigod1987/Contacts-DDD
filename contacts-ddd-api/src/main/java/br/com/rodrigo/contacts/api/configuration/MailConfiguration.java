package br.com.rodrigo.contacts.api.configuration;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfiguration {
	
	@Autowired
	private Environment env;

	@Bean
	public JavaMailSender javaMailSender() {
		
		JavaMailSenderImpl mailSenderImpl = new JavaMailSenderImpl();
		
		mailSenderImpl.setHost(env.getProperty("mail.host"));
		mailSenderImpl.setPort(Integer.parseInt(env.getProperty("mail.port")));
		mailSenderImpl.setUsername(env.getProperty("mail.username"));
		mailSenderImpl.setPassword(env.getProperty("mail.password"));
		
		mailSenderImpl.setJavaMailProperties(getMailProperties());
		
		return mailSenderImpl;
		
	}
	
	private Properties getMailProperties() {
        Properties properties = new Properties();
        properties.setProperty("mail.transport.protocol", env.getProperty("mail.transport.protocol"));
        properties.setProperty("mail.smtp.auth", env.getProperty("mail.smtp.auth"));
        properties.setProperty("mail.smtp.starttls.enable", env.getProperty("mail.smtp.starttls.enable"));
        properties.setProperty("mail.debug", env.getProperty("mail.debug"));
        return properties;
    }
	
}
