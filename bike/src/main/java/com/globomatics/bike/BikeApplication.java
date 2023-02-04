package com.globomatics.bike;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
//@CrossOrigin()
public class BikeApplication {
	
	@Bean
	public RestTemplate getRestTemplate ()
	{
		return new RestTemplate();
	}

	public static void main(String[] args) {
		SpringApplication.run(BikeApplication.class, args);
		System.out.println("App is running!");
	}

}
