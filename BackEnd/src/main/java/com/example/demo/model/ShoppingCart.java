package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shoppingcart")
public class ShoppingCart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "customer_id")
	private String customerID;
	
	@Column(name = "item_ids")
	private String itemIDS;
	
	@Column(name = "item_price")
	private double price;
	
	@Column(name = "item_quantity")
	private int quantity;
	
	@Column(name = "item_totalAmount")
	private double totalAmount;
	
	public ShoppingCart() {
		
	}

	public ShoppingCart(String customerID, String itemIDS, double price, int quantity,double totalAmount) {
		super();
		this.customerID = customerID;
		this.itemIDS = itemIDS;
		this.price = price;
		this.quantity = quantity;
		this.totalAmount = totalAmount;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	public String getItemIDS() {
		return itemIDS;
	}

	public void setItemIDS(String itemIDS) {
		this.itemIDS = itemIDS;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	

}
