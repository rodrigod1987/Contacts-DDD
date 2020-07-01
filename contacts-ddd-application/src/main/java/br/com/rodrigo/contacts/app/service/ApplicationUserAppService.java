package br.com.rodrigo.contacts.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.rodrigo.contacts.domain.application.IApplicationUserAppService;
import br.com.rodrigo.contacts.domain.model.User;
import br.com.rodrigo.contacts.domain.model.VerificationToken;
import br.com.rodrigo.contacts.domain.service.IUserService;
import br.com.rodrigo.contacts.domain.service.IVerificationTokenService;

@Service
public class ApplicationUserAppService implements IApplicationUserAppService {

	private IUserService service;
	private IVerificationTokenService registrationTokenService;
	
	@Autowired
	public ApplicationUserAppService(IUserService service,
			IVerificationTokenService registrationTokenService) {
		this.service = service;
		this.registrationTokenService = registrationTokenService;
	}

	@Override
	public Page<User> findAll(Integer page, Integer size) {
		return service.findAll(page, size);
	}

	@Override
	public User save(User entity) {
		return service.save(entity);
	}

	@Override
	public void delete(Long id) {
		service.delete(id);
	}

	@Override
	public User findBy(Long id) {
		return service.findBy(id);
	}

	@Override
	public User findByUsername(String username) {
		User user = service.findByUsername(username);
		return user;
	}

	@Override
	public void createVerificationToken(User user, String token) {
		VerificationToken verificationToken = new VerificationToken(user, token);
		this.registrationTokenService.save(verificationToken);
	}

	@Override
	public VerificationToken getVerificationToken(String token) {
		return this.registrationTokenService.findByToken(token);
	}

	@Override
	public void saveRegisteredUser(User user) {
		user.setEnabled(true);
		this.service.save(user);
	}

}
