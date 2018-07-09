package eLearning.sf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Payment;

public interface PaymentRepository  extends JpaRepository<Payment, Long>{

//	List<Payment> findAllByStudentId(Long studentId);
	
}
