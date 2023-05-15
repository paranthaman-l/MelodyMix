package com.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.music.models.Song;

@Repository
public interface SongRepo extends JpaRepository<Song,String> {
    
}
