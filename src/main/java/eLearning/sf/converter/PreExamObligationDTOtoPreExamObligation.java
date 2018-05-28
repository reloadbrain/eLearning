package eLearning.sf.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import eLearning.sf.dto.PreExamObligationDTO;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.service.CourseService;
import eLearning.sf.service.PreExamObligationTypeService;
import eLearning.sf.service.PreExamObligationsRecordsService;

@Component
public class PreExamObligationDTOtoPreExamObligation implements Converter<PreExamObligationDTO, PreExamObligation> {

	@Autowired
	PreExamObligationTypeService peots;
	
	@Autowired
	PreExamObligationsRecordsService peors;
	
	@Autowired
	CourseService cs;
	
	@Override
	public PreExamObligation convert(PreExamObligationDTO arg0) {
		PreExamObligation preExamObligation = new PreExamObligation();
		if(arg0.getCourseId()!= null) {
			preExamObligation.setPreExamOId(arg0.getPreExamOId());
		}
		preExamObligation.setActive(arg0.getActive());
		preExamObligation.setCourse(cs.getOne(arg0.getCourseId()));
		preExamObligation.setName(arg0.getName());
		preExamObligation.setType(peots.getOne(arg0.getPreExamOTypeId()));
		//Set<PreExamObligationsRecords> rec = peors.findByPreExamObligationId(arg0.getPreExamOId()).stream().collect(Collectors.toSet());
		//preExamObligation.setPreExamObligationsRecords(rec);
		preExamObligation.setMaxPoints(arg0.getMaxPoints());
		return preExamObligation;
	}
	
	public List<PreExamObligation> convert(List<PreExamObligationDTO> argS) {

		List<PreExamObligation> retVal = new ArrayList<>();

		for (PreExamObligationDTO p : argS) {
			retVal.add(convert(p));
		}

		return retVal;
	}
	

}
