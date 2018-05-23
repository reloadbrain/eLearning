package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Course;

public interface CourseRepository  extends JpaRepository<Course, Long>{

}
