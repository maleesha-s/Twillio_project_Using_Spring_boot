package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Delivery;



public interface DeliveryRepository extends JpaRepository<Delivery, Long>{

	
}
