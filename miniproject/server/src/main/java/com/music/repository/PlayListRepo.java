package com.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.music.models.PlayList;

@Repository
public interface PlayListRepo extends JpaRepository<PlayList,String>{

}
