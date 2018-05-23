package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Payment;

public interface PaymentServiceInterface {
	
	public Payment getOne(Long id);

	public List<Payment> findAll();

	public Payment save(Payment payment);

	public void delete(Long id);

}
