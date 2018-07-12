package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.converter.StudentRecordsDtoToStudentRecords;
import eLearning.sf.dto.ExamStudentRecordsDto;
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

	@Autowired
	StudentRecordsDtoToStudentRecords recordDtoToRecordConverter;

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
		record.setStudent(studentService.findByUsername(studentUsername));
		record.setExam(examService.getOne(examId));

		return record;
	}

	@Override
	public List<ExamStudentRecords> getByStudentAndCourse(String studentUsername, Long courseId) {
		return examStudentRecordsRepository
				.findAllByStudentUserUsernameContainingAndExamCourseCourseIdAndActiveTrue(studentUsername, courseId);
	}

	public List<ExamStudentRecords> findAllByCourseId(Long id) {
		return examStudentRecordsRepository.findAllByExamCourseCourseIdAndActiveTrue(id);
	}

	@Override
	public void grade(List<ExamStudentRecordsDto> recordsDto) {
		for (ExamStudentRecordsDto recordDto : recordsDto) {
			if (recordDto.getPoints() == null) {
				recordDto.setPassed(false);
				recordDto.setGrade(5);
			} else {
				int totalPoints = recordDto.getPreExamPoints() + recordDto.getPoints();
				recordDto.setPassed(true);
				if (totalPoints > 50 && totalPoints < 61) {
					recordDto.setGrade(6);
				} else if (totalPoints > 60 && totalPoints < 71) {
					recordDto.setGrade(7);
				} else if (totalPoints > 70 && totalPoints < 81) {
					recordDto.setGrade(8);
				} else if (totalPoints > 80 && totalPoints < 91) {
					recordDto.setGrade(9);
				} else if (totalPoints > 90 && totalPoints <= 100) {
					recordDto.setGrade(10);
				} else {
					recordDto.setPassed(false);
					recordDto.setGrade(5);
				}
			}
			save(recordDtoToRecordConverter.convert(recordDto));
		}
	}
}
