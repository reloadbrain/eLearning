package eLearning.sf.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import eLearning.sf.model.PreExamObligation;
import eLearning.sf.model.PreExamObligationsRecords;
import eLearning.sf.model.Student;
import eLearning.sf.repository.PreExamObligationsRecordsRepository;
import eLearning.sf.serviceInterface.PreExamObligationsRecordsServiceInterface;

@Service
public class PreExamObligationsRecordsService implements PreExamObligationsRecordsServiceInterface {

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
	public List<PreExamObligationsRecords> findByPreExamObligationId(Long id, String sortPar, String sortDir) {
		if (sortDir.equals("asc")) {
			if (sortPar.equals("lastName")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByStudentUserLastNameAsc(id);
			}
			else if (sortPar.equals("transcriptNumber")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByStudentTranscriptNumberAsc(id);
			}
			else if(sortPar.endsWith("date")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByDateAsc(id);
			}
			else if (sortPar.equals("points")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByPointsAsc(id);
			}
			else if (sortPar.equals("passed")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByPassedAsc(id);
			}
			
		}else {
			if (sortPar.equals("lastName")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByStudentUserLastNameDesc(id);
			}
			else if (sortPar.equals("transcriptNumber")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByStudentTranscriptNumberDesc(id);
			}
			else if (sortPar.equals("points")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByPointsDesc(id);
			}
			else if (sortPar.equals("passed")) {
				return jpa.findAllByPreExamObligationPreExamOIdOrderByPassedDesc(id);
			}	
		}
		return jpa.findAllByPreExamObligationPreExamOIdOrderByDateDesc(id);
	}

	@Override
	public List<PreExamObligationsRecords> findByStudentIdAndCurseId(Long sId, Long cId) {
		return jpa.findAllByStudentStudentIdAndPreExamObligationCourseCourseIdAndActiveTrue(sId, cId);
	}
	
	@Override
	public List<PreExamObligationsRecords> findByStudentIdAndCurseIdPassed(Long sId, Long cId) {
		return jpa.findAllByStudentStudentIdAndPreExamObligationCourseCourseIdAndActiveTrueAndPassedTrue(sId, cId);
	}

	@Override
	public Page<PreExamObligationsRecords> listAllByPage(String searchTerm, Pageable pageable) {
		return jpa.findAllPageAndSearch(searchTerm, pageable);
	}

	@Override
	public PreExamObligationsRecords findByObligationIdAndStudentId(Long sId, Long uId) {
		return jpa.findByPreExamObligationPreExamOIdAndStudentStudentIdAndActiveTrue(sId, uId);
	}

	public void SetTrue(PreExamObligationsRecords p) {
		PreExamObligationsRecords currentMax = new PreExamObligationsRecords();
		currentMax = findByObligationIdAndStudentId(p.getPreExamObligation().getPreExamOId(), p.getStudent().getStudentId());

		if (currentMax == null) {
			p.setActive(true);
			save(p);
		}
		else if(currentMax.getPreExamORecordsId() == p.getPreExamORecordsId()) {
			save(p);
		
		} else if (p.getPoints() > currentMax.getPoints()) {
			currentMax.setActive(false);
			save(currentMax);
			p.setActive(true);
		} else {
			p.setActive(false);
		}
		
		save(p);
		
	}
	
	public void SetTrue(List<PreExamObligationsRecords> p) {
		for (PreExamObligationsRecords preExamObligationsRecords : p) {
			SetTrue(preExamObligationsRecords);
		}

	}
	
	public void createRecordsforStudents(List<Student> students, Long id, Date date, PreExamObligation peo) {
		for (Student student : students) {
			PreExamObligationsRecords per = new PreExamObligationsRecords();
			per.setActive(false);
			per.setDate(date);
			per.setPreExamObligation(peo);
			per.setStudent(student);
			per.setPoints(0);
			jpa.save(per);
		}
		
	}
	
	public int getAllPoints(Long studentId, Long courseId) {
		List<PreExamObligationsRecords> recs = new ArrayList<>();
		recs = findByStudentIdAndCurseIdPassed(studentId, courseId);
		int sum = 0;
		for (PreExamObligationsRecords p : recs) {
			sum += p.getPoints();
		}
		return sum;
	}

	
	
	

}
