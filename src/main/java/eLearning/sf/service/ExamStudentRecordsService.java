package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.repository.ExamStudentRecordsRepository;
import eLearning.sf.serviceInterface.ExamServiceInterface;
import eLearning.sf.serviceInterface.ExamStudentRecordsServiceInterface;
import eLearning.sf.serviceInterface.StudentServiceInterface;

@Service
public class ExamStudentRecordsService implements ExamStudentRecordsServiceInterface {

	@Autowired
	ExamStudentRecordsRepository examStudentRecordsRepository;

	@Autowired
	StudentServiceInterface studentService;

	@Autowired
	ExamServiceInterface examService;

	@Override
	public ExamStudentRecords getOne(Long id) {
		return examStudentRecordsRepository.getOne(id);
	}

	@Override
	public List<ExamStudentRecords> findAll() {
		return examStudentRecordsRepository.findAll();
	}

	@Override
	public ExamStudentRecords save(ExamStudentRecords examStudentRecords) {
		return examStudentRecordsRepository.save(examStudentRecords);
	}

	@Override
	public void delete(Long id) {
		examStudentRecordsRepository.deleteById(id);
	}

	public ExamStudentRecords createNew(String studentUsername, Long examId) {
		ExamStudentRecords record = new ExamStudentRecords();
		record.setActive(true);
		record.setPassed(false);
		record.setPoints(0);
		record.setStudent(studentService.findByUsername(studentUsername));
		record.setExam(examService.getOne(examId));

		return record;
	}
}
