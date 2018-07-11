package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Student;

public interface StudentServiceInterface {

	public Student getOne(Long id);

	public List<Student> findByCourse(Long courseId);

	public List<Student> findAll();

	public Student save(Student student);

	public void delete(Long id);
	
	Student getByUserId(Long id);
	
	public Student findByUsername(String username);
}
