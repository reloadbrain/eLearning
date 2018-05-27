package eLearning.sf.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Course;
import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.Student;
import eLearning.sf.model.User;
import eLearning.sf.repository.PreExamObligationsRecordsRepository;
import eLearning.sf.serviceInterface.PreExamObligationsRecordsServiceInterface;

@Service
public class PreExamObligationsRecordsService implements PreExamObligationsRecordsServiceInterface{

	@Autowired
	PreExamObligationsRecordsRepository jpa;
	
	@Autowired
	PreExamObligationService peos;
	
	@Autowired
	CourseService cs;
	
	@Autowired
	StudentService ss;
	
	@Override
	public PreExamObligationsRecords getOne(Long id) {
		// TODO Auto-generated method stub
		return jpa.getOne(id);
	}

	@Override
	public List<PreExamObligationsRecords> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public PreExamObligationsRecords save(PreExamObligationsRecords preExamObligationsRecords) {
		// TODO Auto-generated method stub
		return jpa.save(preExamObligationsRecords);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		jpa.deleteById(id);
	}

	@Override
	public List<PreExamObligationsRecords> findByPreExamObligationId(Long id) {
		return jpa.findAllByPreExamObligationPreExamOId(id);
	}

	@Override
	public List<PreExamObligationsRecords> findByStudentIdAndCurseId(Long sId, Long cId) {
		return jpa.findAllByStudentStudentIdAndPreExamObligationCourseCourseId(sId, cId);
	}

	
	@Override
	public Page<PreExamObligationsRecords> listAllByPage(String searchTerm, Pageable pageable) {
		return jpa.findAllPageAndSearch(searchTerm, pageable);
	}

	
}
