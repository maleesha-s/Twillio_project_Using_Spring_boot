package com.example.demo.model;

public class Authenticate {
  private int otpCode;
  
  public  Authenticate(){
	
}
  public Authenticate(int otpCode) {
	  this.otpCode = otpCode;
  }
  public int getPin() {
	  return this.otpCode;
  }
  public void setPin(int otpCode) {
	  this.otpCode = otpCode;
  }
}