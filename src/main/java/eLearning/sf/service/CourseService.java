package eLearning.sf.service;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Course;
import eLearning.sf.repository.CourseRepository;
import eLearning.sf.serviceInterface.CourseServiceInterface;

@Service
public class CourseService implements CourseServiceInterface{

	private static SessionFactory sessionFactory = HibernateUtility.getSessionFactory();
	
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
	
	public void addStudentCourse(Long course_id,Long student_id) {
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		SQLQuery insertSql = session.createSQLQuery("" + "insert into students_courses(course_id , student_id) values(?,?);");
		insertSql.setParameter(0,  course_id);
		insertSql.setParameter(1,  student_id);
		insertSql.executeUpdate();
		session.getTransaction().commit();
		
	}

	@Override
	public List<Course> findByStudent(Long id) {
		return courseRepository.findAllByStudentsStudentId(id);
	}

	@Override
	public List<Course> findByProfessor(Long id) {
		return courseRepository.findAllByProfessorsProfessorId(id);
	}
	
}
