package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "delivery")
public class Delivery {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id; 
		
		@Column(name = "orderId")
		private long orderId;
		
		@Column(name = "customerId")
		private long customerId;
		
		@Column(name = "Delivery_Address")
		private String deliveryAddress;

		public Delivery() {
		
		}

		public Delivery(long orderId, long customerId, String deliveryAddress) {
			super();
			this.orderId = orderId;
			this.customerId = customerId;
			this.deliveryAddress = deliveryAddress;
		}

		
		

		public long getId() {
			return id;
		}



		public void setId(long id) {
			this.id = id;
		}



		public long getOrderId() {
			return orderId;
		}

		public void setOrderId(long orderId) {
			this.orderId = orderId;
		}

		public long getCustomerId() {
			return customerId;
		}

		public void setCustomerId(long customerId) {
			this.customerId = customerId;
		}

		public String getDeliveryAddress() {
			return deliveryAddress;
		}

		public void setDeliveryAddress(String deliveryAddress) {
			this.deliveryAddress = deliveryAddress;
		}
	
		
		
}
