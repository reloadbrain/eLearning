package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Payment;
import eLearning.sf.model.PreExamObligationsRecords;

public interface PaymentServiceInterface {
	
	public Payment getOne(Long id);

	public List<Payment> findAll();

	public Payment save(Payment payment);
	
//	public List<Payment> findByStudentId(Long studentId );

	public void delete(Long id);

}
