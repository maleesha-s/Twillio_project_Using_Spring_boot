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
import com.example.demo.model.item;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.ItemRepository1;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ItemController {

	@Autowired
	private ItemRepository itemRepository;
	private ItemRepository1 itemRepository1;
	
	//get all items
	@GetMapping("/items")
	public List<item> getAllitems(){
		return itemRepository.findAll();
	}
	//create new item
		@PostMapping("/items")
		public item createItem(@RequestBody item item) {
			return itemRepository.save(item);
		}
		//get one seller's items
		@GetMapping("/items/items/{seller_ID}")
		public List<item> getAllitemBySellerID(@PathVariable long seller_ID){
		return itemRepository.getitemsbySellerid(seller_ID);
		}
		
		//get item id
		@GetMapping("/items/{id}")
		public ResponseEntity<item> getItembyid(@PathVariable long id) {
			
			item item = itemRepository.findById(id).
					orElseThrow(()-> new ResourceNotFoundException("Item not exist with id : " + id));
			return ResponseEntity.ok(item);
		}
			// get item by id rest api
			@GetMapping("/items/item/{name}")
			public ResponseEntity<item> getItem(@PathVariable String name) {
				item item = itemRepository.findItemByName(name)
						.orElseThrow(() -> new ResourceNotFoundException("Item not exist with Item Name :" + name));
				return ResponseEntity.ok(item);
			}
			
				
		
		//update item
		@PutMapping("/items/{id}")
		public ResponseEntity<item> updateItem(@PathVariable Long id,@RequestBody item itemdetails){
			
			item item = itemRepository.findById(id).
					orElseThrow(()-> new ResourceNotFoundException("Item not exixt with id : " + id));
			
			item.setName(itemdetails.getName());
			item.setDescription(itemdetails.getDescription());
			item.setAvailability(itemdetails.getAvailability());
			item.setPrice(itemdetails.getPrice());
			
			item updateitem = itemRepository.save(item);
			return ResponseEntity.ok(updateitem);
		}
		@DeleteMapping("/items/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteitems(@PathVariable Long id){
			item item = itemRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
			
			itemRepository.delete(item);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
