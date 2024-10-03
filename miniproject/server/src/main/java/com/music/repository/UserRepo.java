package com.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.music.models.User;

@Repository
public interface UserRepo extends JpaRepository<User,String>{

    User findByEmail(String email);
    
}
