package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "items")
public class item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "itemname")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "price")
	private long price;
	
	@Column(name = "availability")
	private long availability;
	
	@Column(name = "seller_ID")
	private long seller_ID;
	
	public item() {
		
	}
	
	public item(String name, String description, long price, long availability, long seller_ID) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.availability = availability;
		this.seller_ID = seller_ID;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public long getAvailability() {
		return availability;
	}
	public void setAvailability(long availability) {
		this.availability = availability;
	}
	public long getSeller_ID() {
		return seller_ID;
	}
	public void setSeller_ID(long seller_ID) {
		this.seller_ID = seller_ID;
	}

	
}
