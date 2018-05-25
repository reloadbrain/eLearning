package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Payment;
import eLearning.sf.repository.PaymentRepository;
import eLearning.sf.serviceInterface.PaymentServiceInterface;

@Service
public class PaymentService implements PaymentServiceInterface{

	@Autowired
	PaymentRepository paymentRepository;
	
	
	@Override
	public Payment getOne(Long id) {
		// TODO Auto-generated method stub
		return paymentRepository.getOne(id);
	}

	@Override
	public List<Payment> findAll() {
		// TODO Auto-generated method stub
		return paymentRepository.findAll();
	}

	@Override
	public Payment save(Payment payment) {
		// TODO Auto-generated method stub
		return paymentRepository.save(payment);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		paymentRepository.deleteById(id);
	}

}
