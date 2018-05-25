package eLearning.sf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eLearning.sf.model.Role;

public interface RoleJpaRepo extends JpaRepository<Role, Long> {

}
