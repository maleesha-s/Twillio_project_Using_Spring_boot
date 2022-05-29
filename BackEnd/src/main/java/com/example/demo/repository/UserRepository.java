package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.User;


public interface UserRepository extends JpaRepository<User, Long>{
	//find user using user email
	Optional<User> findByemail(String email);
	//find user using email and password
	Optional<User> findByEmailAndPassword(String email, String password);
}
