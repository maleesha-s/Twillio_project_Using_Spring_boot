package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.PaymentNotFoundException;
import com.example.demo.model.Authenticate;
import com.example.demo.model.MobilePayment;
import com.example.demo.model.SMS;
import com.example.demo.repository.MobilePaymentRepository;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Message;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/mobilepay/")
public class MobilePaymentContoller {
	
	@Autowired
	private MobilePaymentRepository mobilePaymentRepository;
	
	private SMS sms;
	
	public static final String ACCOUNT_SID = "AC6e6be5415871a0e7344e4144d8149d9e";
    public static final String AUTH_TOKEN = "869daa1a0911bcb2ecbc8d3a5baf89eb";
    public static final String TWILIO_NUMBER = "+17207307365";
    
    //add new payment 
    @PostMapping("/pay")
    public MobilePayment createMobilePayment(@RequestBody MobilePayment mobilePayment) {
    	MobilePayment res =  mobilePaymentRepository.save(mobilePayment);
    	sms = new SMS(res.getMobileNumber(),"Your OTP is " + res.getDigitPin());
    	sendSMS(sms);
    	
    	return res;
    }
    //update payment
    @PutMapping("/pay/{id}")
    public ResponseEntity<MobilePayment> getPaymentById(@PathVariable Long id, @RequestBody Authenticate authenticate){
    	System.out.println("pin is " + authenticate.getPin());
    	System.out.println("Id id : " + id);
    	MobilePayment mobilePayment = mobilePaymentRepository.findById(id).
				orElseThrow(()-> new PaymentNotFoundException("Mobile Payment is not exist with id : " + id));
    	System.out.println("mobile otp " + mobilePayment.getDigitPin());
    	MobilePayment updatedMobilePayment ;
    	Authenticate a = authenticate;
    	
    	if(mobilePayment.getDigitPin() == a.getPin()) {
    		mobilePayment.setStatus("conformed");
    		updatedMobilePayment = mobilePaymentRepository.save(mobilePayment);
    		sms = new SMS(mobilePayment.getMobileNumber(),"Your Payment Successfully Added to your mobile bill.");
    	}else {
    		mobilePayment.setStatus("rejected");
    		updatedMobilePayment = mobilePaymentRepository.save(mobilePayment);
    		sms = new SMS(mobilePayment.getMobileNumber(),"Your Payment was rejected. Please try again!");
    	}
    	sendSMS(sms);
		return ResponseEntity.ok(updatedMobilePayment);
    }
    //send sms to user
    public void sendSMS(SMS sms) {
        try {
            TwilioRestClient client = new TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN);
            List<NameValuePair> params = new ArrayList<NameValuePair>();
            params.add(new BasicNameValuePair("Body", sms.getSMSBody()));
            params.add(new BasicNameValuePair("To", sms.getReceivedNumber()));
            params.add(new BasicNameValuePair("From", TWILIO_NUMBER));

            MessageFactory messageFactory = client.getAccount().getMessageFactory();
            Message message = messageFactory.create(params);
            System.out.println(message.getSid());
        } 
        catch (TwilioRestException e) {
            System.out.println(e.getErrorMessage());
        }
    }
}