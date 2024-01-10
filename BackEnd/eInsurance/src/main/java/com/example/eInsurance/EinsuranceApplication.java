package com.example.alcaline;

import com.example.alcaline.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
//@EnableConfigurationProperties
//@EntityScan(basePackages = {"com.example.alcaline.entity"})
public class AlcalineApplication implements ApplicationRunner {

	@Autowired
	private AdminService adminService;

	public static void main(String[] args) {
		SpringApplication.run(AlcalineApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		// Call the initializeAdmin method during application startup
		adminService.initializeAdmin();
	}
}
