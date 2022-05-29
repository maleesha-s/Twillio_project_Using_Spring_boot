package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Delivery;
import com.example.demo.repository.DeliveryRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DeliveryController {

	@Autowired
	private DeliveryRepository deliveryRepository;
	
	// view all delivery details
	@GetMapping("/deliveries")
	public List<Delivery> GetAllDeliveryDetails(){
		return deliveryRepository.findAll();
	}
	
	// insert delivery details
	@PostMapping("/deliveries")
	public Delivery AddDeliveryDetails(@RequestBody Delivery delivery){
		return deliveryRepository.save(delivery);
	}
	
	// get delivery using id
	@GetMapping("/delivery-details/{id}")
	public ResponseEntity<Delivery> GetDeliveryDetailsById(@PathVariable long id) {
		Delivery delivery = deliveryRepository.findById(id).orElseThrow(
				()->new ResourceNotFoundException("There is no delivery on Id : " + id));
		return ResponseEntity.ok(delivery);
	}
}
