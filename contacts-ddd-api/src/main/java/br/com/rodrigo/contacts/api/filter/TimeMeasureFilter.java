package br.com.rodrigo.contacts.api.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class TimeMeasureFilter implements Filter {

	private Logger logger;

	public TimeMeasureFilter() {
		super();
		this.logger = LoggerFactory.getLogger(TimeMeasureFilter.class);
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest req = (HttpServletRequest) request;
		String requestURI = req.getRequestURI();
		
		long startTime = System.currentTimeMillis();
		
		chain.doFilter(request, response);
		
		long endTime = System.currentTimeMillis();
		
		this.logger.info("The request took " 
				+ (endTime - startTime) + "ms to run the action " 
				+ requestURI);
	}

}
