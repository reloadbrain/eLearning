package eLearning.sf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eLearning.sf.model.Department;
import eLearning.sf.repository.DepartmentJpaRepo;
import eLearning.sf.serviceInterface.DepartmentServiceInterface;

@Service
public class DepartmentService implements DepartmentServiceInterface{
	
	@Autowired
	DepartmentJpaRepo jpa;

	@Override
	public Department getOne(Long id) {
		return jpa.getOne(id);
	}

	@Override
	public List<Department> findAll() {
		// TODO Auto-generated method stub
		return jpa.findAll();
	}

	@Override
	public Department save(Department department) {
		// TODO Auto-generated method stub
		return jpa.save(department);
	}

	@Override
	public void delete(Long id) {
		jpa.deleteById(id);
		
	}

	@Override
	public List<Department> findAllActive() {
		return jpa.findAllByActiveTrue();
	}

}
