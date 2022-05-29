package com.example.demo.model;

public class SMS {
	private String ReceiversNumber;
	private String SMSBody;
	
	public SMS(String receivedNumber, String sMSBody) {
		super();
		ReceiversNumber = receivedNumber;
		SMSBody = sMSBody;
	}

	public String getReceivedNumber() {
		return ReceiversNumber;
	}

	public void setReceivedNumber(String receivedNumber) {
		ReceiversNumber = receivedNumber;
	}

	public String getSMSBody() {
		return SMSBody;
	}

	public void setSMSBody(String sMSBody) {
		SMSBody = sMSBody;
	}
	
	
	
	
}
