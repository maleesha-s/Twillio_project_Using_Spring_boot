package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.example.demo.model.ShoppingCart;
import com.example.demo.model.User;
import com.example.demo.repository.ShoppingCartRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShoppingCartController {
	
	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
		// get all Orders
		@GetMapping("/shoppingcart")
		public List<ShoppingCart> getAllShoppingCartItems(){
			return shoppingCartRepository.findAll();
		}		
		
		// get order by id rest api
		@GetMapping("/shoppingcart/{id}")
		public ResponseEntity<ShoppingCart> getOrderById(@PathVariable Long id) {
			ShoppingCart shoppingCart = shoppingCartRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
			return ResponseEntity.ok(shoppingCart);
		}
		
		
		
		// create Order rest api
		@PostMapping("/shoppingcart")
		public ShoppingCart creatShoppingCart(@RequestBody ShoppingCart shoppingCart) {
			return shoppingCartRepository.save(shoppingCart);
		}
		
		// update order rest api
		
		@PutMapping("/shoppingcart/{id}")
		public ResponseEntity<ShoppingCart> updateOrder(@PathVariable Long id, @RequestBody ShoppingCart shoppingCart){
			ShoppingCart shoppingCart1 = shoppingCartRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
			
			shoppingCart1.setCustomerID(shoppingCart.getCustomerID());
			shoppingCart1.setItemIDS(shoppingCart.getItemIDS());
			shoppingCart1.setPrice(shoppingCart.getPrice());
			shoppingCart1.setQuantity(shoppingCart.getQuantity());
			
			
			ShoppingCart updatedOrder = shoppingCartRepository.save(shoppingCart1);
			return ResponseEntity.ok(updatedOrder);
		}
		
		
		// delete Order rest api
		@DeleteMapping("/shoppingcart/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteShoppingCart(@PathVariable Long id){
			ShoppingCart shoppingCart = shoppingCartRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
			
			shoppingCartRepository.delete(shoppingCart);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
		
				
				@PostMapping("/addCart1")
				public ShoppingCart addToCartItem1(@RequestBody ShoppingCart shoppingCart) {
					return shoppingCartRepository.save(shoppingCart);
				}
				
				//Get Order ID
				@GetMapping("/orderID")
				public List<ShoppingCart> getOrderID(){
					return shoppingCartRepository.findAll();
				}	
				
				//Add the items to the cart
				@PutMapping("/addCart2/{id}")
				public ResponseEntity<ShoppingCart> addToCartItem2(@PathVariable Long id, @RequestBody ShoppingCart shoppingCart){
					ShoppingCart shoppingCart1 = shoppingCartRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
					
					double totalAmount = shoppingCart1.getPrice()+(shoppingCart.getPrice()*shoppingCart.getQuantity());
					String itemList = shoppingCart1.getItemIDS()+","+shoppingCart.getItemIDS();
					//String quantityList = shoppingCart1.getQuantity()+ ","+ shoppingCart.getQuantity();
					shoppingCart1.setCustomerID(shoppingCart.getCustomerID());
					shoppingCart1.setItemIDS(itemList);
					
					shoppingCart1.setQuantity(shoppingCart.getQuantity());
					shoppingCart1.setPrice(totalAmount);
					ShoppingCart updatedOrder = shoppingCartRepository.save(shoppingCart1);
					return ResponseEntity.ok(updatedOrder);
				}
				
				
					
					
				
				
		


	
}
