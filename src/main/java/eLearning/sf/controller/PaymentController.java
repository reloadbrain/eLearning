package eLearning.sf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.PaymentDTOtoPayment;
import eLearning.sf.converter.PaymentToPaymentDTO;
import eLearning.sf.dto.PaymentDTO;
import eLearning.sf.service.PaymentService;
@Controller
@RequestMapping(value = "/api/payments")
public class PaymentController {

	
	@Autowired
	private PaymentService paymentService;
	

	@Autowired
	private PaymentToPaymentDTO paymentToPaymentDTO;

	@Autowired
	private PaymentDTOtoPayment paymentDTOtoPayment;


	@GetMapping
	public ResponseEntity<List<PaymentDTO>> getPayments() {
		return new ResponseEntity<>(paymentToPaymentDTO.convert(paymentService.findAll()), HttpStatus.OK);
	}

}
