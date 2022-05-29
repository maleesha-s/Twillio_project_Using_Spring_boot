package com.example.demo.repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.item;

@Repository
public interface ItemRepository extends JpaRepository<item, Long> {
	//get list of items using seller id
	public default  List<item> getitemsbySellerid(long seller_ID) {
		return findAll().stream().filter(item -> item.getSeller_ID() == seller_ID)
		.collect(Collectors.toList());
		}
	//find a item using item name
	public Optional<item> findItemByName(String name);;
		

}
