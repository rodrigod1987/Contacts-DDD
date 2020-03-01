package br.com.rodrigo.contacts.app.service.mapper;

import org.springframework.context.annotation.Bean;

public class ModelMapperBean {

	@Bean
	public ModelMapperBean modelMapper() {
		return new ModelMapperBean();
	}
	
}