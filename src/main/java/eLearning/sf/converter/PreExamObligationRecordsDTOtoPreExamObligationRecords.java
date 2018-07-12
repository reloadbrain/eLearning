package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PreExamObligationsRecordsDTO;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.service.PreExamObligationService;
import eLearning.sf.service.StudentService;

@Component
public class PreExamObligationRecordsDTOtoPreExamObligationRecords implements Converter<PreExamObligationsRecordsDTO, PreExamObligationsRecords> {

	@Autowired
	PreExamObligationService peos;
	
	@Autowired
	StudentService ss;
	
	@Override
	public PreExamObligationsRecords convert(PreExamObligationsRecordsDTO arg0) {
		PreExamObligationsRecords p = new PreExamObligationsRecords();
		if(arg0.getPreExamObligationsRecordsId() != null) {
			p.setPreExamORecordsId(arg0.getPreExamObligationsRecordsId());
		}
		if(arg0.getPoints()!= null) {
			p.setPoints(arg0.getPoints());
		}
		p.setStudent(ss.findByStudentId(arg0.getStudentId()));
		p.setPreExamObligation(peos.findById(arg0.getPreExamObligationId()));
		p.setDate(arg0.getDate());
		p.setPassed(arg0.isPassed());
		p.setActive(arg0.isActive());
		return p;
	}
	
	public List<PreExamObligationsRecords> convert(List<PreExamObligationsRecordsDTO> argS){
		
		List<PreExamObligationsRecords> retVal = new ArrayList<>();
		
		for (PreExamObligationsRecordsDTO p : argS) {
			retVal.add(convert(p));
		}
		
		return retVal;
	}

}
