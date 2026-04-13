package com.demo_jwt.demo_jwt.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.demo_jwt.demo_jwt.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}