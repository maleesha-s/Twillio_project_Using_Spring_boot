package com.example.demo.repository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.MobilePayment;

public interface MobilePaymentRepository extends JpaRepository<MobilePayment, Long>{
	//get list of mobile payemet using payment id
	public default  List<MobilePayment> findById(long id) {
		return findAll().stream().filter(MobilePayment -> MobilePayment.getId() == id)
		.collect(Collectors.toList());
		}
}
