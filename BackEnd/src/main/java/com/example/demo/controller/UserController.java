package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;

import com.example.demo.model.User;

import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
		// get users
		@GetMapping("/user")
		public List<User> getAllUsers(){
			return userRepository.findAll();
		}		
		
		// get user by id rest api
		@GetMapping("/user/{email}")
		public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
			User user = userRepository.findByemail(email)
					.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + email));
			return ResponseEntity.ok(user);
		}
		// get user by id rest api
				@GetMapping("/user/{email}/{password}")
				public ResponseEntity<User> getUserByEmailAndPassword(@PathVariable String email,@PathVariable String password) {
					User user = userRepository.findByEmailAndPassword(email,password)
							.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + email + password));
					return ResponseEntity.ok(user);
				}
				
		
		
		//create user rest api
		@PostMapping("/user")
		public User addUser(@RequestBody User user) {
			return userRepository.save(user);
		}
		
		// update user rest api
		
		@PutMapping("/user/{id}")
		public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user){
			User updateUser = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
			
			updateUser.setFirstname(user.getFirstname());
			updateUser.setLastname(user.getLastname());
			updateUser.setEmail(user.getEmail());
			updateUser.setPassword(user.getPassword());
			updateUser.setType(user.getType());
			updateUser.setContactNo(user.getContactNo());
			User updatedUser = userRepository.save(updateUser);
			return ResponseEntity.ok(updatedUser);
		}
		
		
		// delete Order rest api
		@DeleteMapping("/user/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
			User shoppingCart = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
			
			userRepository.delete(shoppingCart);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		

}
