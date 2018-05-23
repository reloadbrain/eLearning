<<<<<<< HEAD
package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Course;
import eLearning.sf.repository.CourseRepository;
import eLearning.sf.serviceInterface.CourseServiceInterface;

@Service
public class CourseService implements CourseServiceInterface{

	
	@Autowired
	CourseRepository courseRepository;
	
	
	@Override
	public Course getOne(Long id) {
		// TODO Auto-generated method stub
		return courseRepository.getOne(id);
	}

	@Override
	public List<Course> findAll() {
		// TODO Auto-generated method stub
		return courseRepository.findAll();
	}

	@Override
	public Course save(Course course) {
		// TODO Auto-generated method stub
		return courseRepository.save(course);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		courseRepository.deleteById(id);
	}

}
=======
package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import eLearning.sf.model.Course;
import eLearning.sf.repository.CourseRepository;
import eLearning.sf.serviceInterface.CourseServiceInterface;

public class CourseService implements CourseServiceInterface{

	
	@Autowired
	CourseRepository courseRepository;
	
	
	@Override
	public Course getOne(Long id) {
		// TODO Auto-generated method stub
		return courseRepository.getOne(id);
	}

	@Override
	public List<Course> findAll() {
		// TODO Auto-generated method stub
		return courseRepository.findAll();
	}

	@Override
	public Course save(Course course) {
		// TODO Auto-generated method stub
		return courseRepository.save(course);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		courseRepository.deleteById(id);
	}

}
>>>>>>> f2c7db3e20fe1ab85f20d8f184b015bbf0156f40
