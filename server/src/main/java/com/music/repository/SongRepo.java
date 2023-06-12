package com.music.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.music.models.Movie;
import com.music.models.Song;

@Repository
public interface SongRepo extends JpaRepository<Song, String> {

    List<Song> findAllByMovie(Movie movie);

    List<Song> findAllByTitleContainingIgnoreCase(String title);

}
