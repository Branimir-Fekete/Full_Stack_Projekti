package com.movies.movieap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MovieapApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieapApplication.class, args);

	}

}
