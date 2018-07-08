package eLearning.sf.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import eLearning.sf.converter.PaymentDTOtoPayment;
import eLearning.sf.converter.PaymentToPaymentDTO;
import eLearning.sf.dto.PaymentDTO;
import eLearning.sf.model.Payment;
import eLearning.sf.model.Student;
import eLearning.sf.service.PaymentService;
import eLearning.sf.service.StudentService;

@Controller
@RequestMapping(value = "/api/payments")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	

	@Autowired
	private StudentService studentService;

	@Autowired
	private PaymentToPaymentDTO paymentToPaymentDTO;

	@Autowired
	private PaymentDTOtoPayment paymentDTOtoPayment;


	@GetMapping
	public ResponseEntity<List<PaymentDTO>> getPayments() {
		return new ResponseEntity<>(paymentToPaymentDTO.convert(paymentService.findAll()), HttpStatus.OK);
	}
	
//	@GetMapping(path = "/payments_for_student/{id}")
//	public ResponseEntity<List<PaymentDTO>> getPaymentsForStudent(@PathVariable long id) {
//		return new ResponseEntity<>(paymentToPaymentDTO.convert(paymentService.findByStudentId(id)), HttpStatus.OK);
//	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<PaymentDTO> getPaymentsById(@PathVariable long id) {
		return new ResponseEntity<PaymentDTO>(paymentToPaymentDTO.convert(paymentService.getOne(id)),
				HttpStatus.OK);
	}
	
	
	@GetMapping(path = "/payments_for_student/{id}")
	public ResponseEntity<List<PaymentDTO>> getPaymentsForStudent(@PathVariable long id) {
		List<PaymentDTO> studentPayments = new ArrayList<>();
		List<PaymentDTO> allPayments = paymentToPaymentDTO.convert(paymentService.findAll());
		
		for(PaymentDTO dto : allPayments) {
			if(dto.getStudentId() == id)
				studentPayments.add(dto);
		}
		
		return new ResponseEntity<List<PaymentDTO>>(studentPayments, HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json")
	public ResponseEntity<PaymentDTO> savePayments(@RequestBody PaymentDTO paymentDTO) {
		Payment payment = paymentDTOtoPayment.convert(paymentDTO);
		return new ResponseEntity<PaymentDTO>(paymentToPaymentDTO.convert(paymentService.save(payment)),
				HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<PaymentDTO> editPayments(@RequestBody PaymentDTO paymentDTO) {
		Payment payment = paymentDTOtoPayment.convert(paymentDTO);
		return new ResponseEntity<PaymentDTO>(paymentToPaymentDTO.convert(paymentService.save(payment)),
				HttpStatus.OK);
	};

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<String> deletePayments(@PathVariable long id) {
		paymentService.delete(id);
		return new ResponseEntity<String>("Success",
				HttpStatus.OK);
	}

}
