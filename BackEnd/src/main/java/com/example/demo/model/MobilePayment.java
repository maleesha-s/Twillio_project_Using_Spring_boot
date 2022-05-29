package com.example.demo.model;

import java.util.Random;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mobile_payment")
public class MobilePayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "mobile_number")
	private String mobileNumber;
	
	@Column(name = "digit_pin")
	private int digitPin;
	
	@Column(name = "amount")
	private double amount;
	
	@Column (name = "paid_date")
	private String paidDate;
	
	@Column (name = "status")
	private String status;
	public MobilePayment() {
		
	}
	public MobilePayment(long id, String mobileNumber, double amount) {
		Random rand = new Random();
		this.id = id;
		this.mobileNumber = mobileNumber;
		this.digitPin = rand.nextInt((9999 - 100) + 1) + 10;
		this.amount = amount;
		this.paidDate = java.time.LocalDate.now().toString();
		this.status = "pending";
	}

	public long getId() {
		return id;
	}
	
	public String getStatus() {
		return this.status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public void setId(long id) {
		this.id = id;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getDigitPin() {
		return digitPin;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaidDate() {
		return paidDate;
	}

	public void setPaidDate(String paidDate) {
		this.paidDate = paidDate;
	}
	
	
}