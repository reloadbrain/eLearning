package eLearning.sf.converter;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PaymentDTO;
import eLearning.sf.model.Payment;
import eLearning.sf.model.Role;
import eLearning.sf.service.StudentService;

@Component
public class PaymentToPaymentDTO implements Converter<Payment , PaymentDTO> {


	@Autowired
	StudentService studetService;
	
	@Override
	public PaymentDTO convert(Payment payment) {
		
		PaymentDTO paymentDTO = new PaymentDTO();
		
		paymentDTO.setPaymentId(payment.getPayment_id());
		paymentDTO.setActive(payment.getActive());
		paymentDTO.setDescription(payment.getDescription());
		paymentDTO.setStudentId(payment.getStudent().getUser().getUserId());
		paymentDTO.setStudentFirstName(payment.getStudent().getUser().getFirstName());
		paymentDTO.setStudentLastName(payment.getStudent().getUser().getLastName());
		paymentDTO.setValue(payment.getValue());
		
		
		return paymentDTO;
	}
	
	public List<PaymentDTO> convert(List<Payment> paymentList) {

		List<PaymentDTO> retVal = new ArrayList<>();
		for (Payment payment : paymentList) {
			retVal.add(convert(payment));
		}
		return retVal;
	}

	
	

}
