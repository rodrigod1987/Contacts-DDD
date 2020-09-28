package br.com.rodrigo.contacts.application.mapper;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperBean {

	@Bean
	public Mapper modelMapper() {
		return new DozerBeanMapper();
	}
	
}