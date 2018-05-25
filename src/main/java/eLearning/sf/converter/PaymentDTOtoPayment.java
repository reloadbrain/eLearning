package eLearning.sf.converter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PaymentDTO;
import eLearning.sf.model.Payment;
import eLearning.sf.service.StudentService;

@Component
public class PaymentDTOtoPayment implements Converter<PaymentDTO , Payment>{

	@Autowired
	StudentService studetService;
	
	@Override
	public Payment convert(PaymentDTO paymentDTO) {
		
		Payment payment = new Payment();
		payment.setActive(paymentDTO.getActive());
		payment.setDescription(paymentDTO.getDescription());
		payment.setPayment_id(paymentDTO.getPaymentId());
		payment.setValue(paymentDTO.getValue());
		payment.setStudent(studetService.getOne(paymentDTO.getStudentId()));
		// TODO Auto-generated method stub
		return payment;
	}

}
