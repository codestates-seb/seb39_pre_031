package com.codestates.pre31;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Pre31Application {

	public static void main(String[] args) {
		SpringApplication.run(Pre31Application.class, args);
	}

}
