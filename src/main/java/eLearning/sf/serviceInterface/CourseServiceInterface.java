package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Course;

public interface CourseServiceInterface {


	public Course getOne(Long id);

	public List<Course> findAll();

	public Course save(Course course);

	public void delete(Long id);
}
