package com.codestates.pre31.user.repository;

import com.codestates.pre31.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
