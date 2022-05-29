package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "card_number")
	private String cardNumber;
	
	@Column(name = "card_holderName")
	private String cardHolderName;
	
	@Column(name = "expire_date")
	private String expireDate;
	
	@Column (name = "cvc")
	private String cvc;
	
	@Column(name = "amount")
	private Double amount;

	private String paidDate;
	
	private String email;
	
	private String mobile;
	
	public Payment() {
		
	}

	public Payment(String cardNumber, String cardHolderName, String expireDate, String cvc, Double amount, String email, String mobileNumber) {
		super();
		this.cardNumber = cardNumber;
		this.cardHolderName = cardHolderName;
		this.expireDate = expireDate;
		this.cvc = cvc;
		this.amount = amount;
		this.email = email;
		this.mobile = mobileNumber;
		this.paidDate = java.time.LocalDate.now().toString();
	}

	public void setMobile(String mobileNumber) {
		this.mobile = mobileNumber;
	}
	
	public String getMobile() {
		return this.mobile;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCardHolderName() {
		return cardHolderName;
	}

	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}

	public String getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(String expireDate) {
		this.expireDate = expireDate;
	}

	public String getCvc() {
		return cvc;
	}

	public void setCvc(String cvc) {
		this.cvc = cvc;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getPaidDate() {
		return paidDate;
	}

	
}
