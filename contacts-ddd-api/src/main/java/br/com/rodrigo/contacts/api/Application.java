package br.com.rodrigo.contacts.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = {"br.com.rodrigo.contacts", "br.com.rodrigo.contacts.app.service", "br.com.rodrigo.contacts.api"})
@EntityScan("br.com.rodrigo.contacts.domain.model")
@EnableJpaRepositories("br.com.rodrigo.contacts.data.repository")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
}
