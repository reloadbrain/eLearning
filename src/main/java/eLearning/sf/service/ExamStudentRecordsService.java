package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.ExamStudentRecords;
import eLearning.sf.repository.ExamStudentRecordsRepository;
import eLearning.sf.serviceInterface.ExamStudentRecordsServiceInterface;

@Service
public class ExamStudentRecordsService implements ExamStudentRecordsServiceInterface {

	@Autowired
	ExamStudentRecordsRepository examStudentRecordsRepository;

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
}
