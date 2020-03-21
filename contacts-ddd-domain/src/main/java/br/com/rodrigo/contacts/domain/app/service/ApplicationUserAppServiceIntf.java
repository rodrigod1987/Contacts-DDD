package br.com.rodrigo.contacts.domain.app.service;

import br.com.rodrigo.contacts.domain.service.dto.ApplicationUserDto;

public interface ApplicationUserAppServiceIntf extends BaseAppService<ApplicationUserDto> {

	ApplicationUserDto findByUserName(String userName);
	
}
