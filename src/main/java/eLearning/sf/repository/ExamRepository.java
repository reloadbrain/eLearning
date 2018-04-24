package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {

}
