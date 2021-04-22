package br.com.rodrigo.contacts.api.configuration;

import javax.sql.DataSource;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FlywayMigration {
	
	@Autowired
	private DataSource datasource;

	@Bean
	public FlywayMigrationStrategy flywayMigrationStrategy() {
		
		Flyway flyway = Flyway
				.configure()
				.dataSource(this.datasource)
				.baselineOnMigrate(true)
				.load();
		
		return flywayStrategy -> {
			flyway.migrate();			
		};
	}
	
	
}
