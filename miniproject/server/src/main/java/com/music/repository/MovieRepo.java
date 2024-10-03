package com.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.music.models.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, String> {

}
