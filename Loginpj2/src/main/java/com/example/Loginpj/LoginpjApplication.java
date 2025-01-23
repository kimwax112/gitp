package com.example.Loginpj;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.Loginpj.mapper") 
public class LoginpjApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginpjApplication.class, args);
	}

}
