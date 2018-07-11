package eLearning.sf.serviceInterface;

import java.util.List;

import eLearning.sf.model.Department;

public interface DepartmentServiceInterface {
	
	public Department getOne(Long id);

	public List<Department> findAll();

	public Department save(Department department);

	public void delete(Long id);
	
	public List<Department> findAllActive();

}
