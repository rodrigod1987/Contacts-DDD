package br.com.rodrigo.contacts.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.application.IApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.ApplicationUser;
import br.com.rodrigo.contacts.domain.model.VerificationToken;
import br.com.rodrigo.contacts.domain.service.IApplicationUserService;
import br.com.rodrigo.contacts.domain.service.IVerificationTokenService;

@Service
public class ApplicationUserAppService implements IApplicationUserAppService {

	private IApplicationUserService service;
	private IVerificationTokenService registrationTokenService;
	
	@Autowired
	public ApplicationUserAppService(IApplicationUserService service) {
		this.service = service;
	}

	@Override
	public Page<ApplicationUser> findAll(Integer page, Integer size) {
		return service.findAll(page, size);
	}

	@Override
	public ApplicationUser save(ApplicationUser entity) {
		return service.save(entity);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public ApplicationUser findBy(Long id) {
		return service.findBy(id);
	}

	@Override
	public ApplicationUser findByUsername(String username) {
		return service.findByUsername(username);
	}

	@Override
	public void createVerificationToken(ApplicationUser user, String token) {
		VerificationToken verificationToken = new VerificationToken(user, token);
		this.registrationTokenService.save(verificationToken);
	}

	@Override
	public VerificationToken getVerificationToken(String token) {
		return this.registrationTokenService.findByToken(token);
	}

	@Override
	public void saveRegisteredUser(ApplicationUser user) {
		user.setEnabled(true);
		this.service.save(user);
	}

}
