package com.music.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.music.models.Song;
import com.music.repository.SongRepo;

@Service
public class SongServices {
    
    @Autowired
    private SongRepo songRepo;

    public List<Song> getAllSongs() {
        return songRepo.findAll();
    }

    public String addSong(Song song) {
        UUID sid = UUID.randomUUID();
        song.setSid(sid.toString());
        songRepo.save(song);
        return "Song Added";
    }

    public String updateSong(String sid, Song song) {
        Song song1 = songRepo.findById(sid).get();
        if(song1 != null) {
            song.setSid(sid);
            songRepo.save(song);
            return "Song Updated successfully";
        }
        return "Song Not Found";
    }

    public String deleteSong(String sid) {
        Song song1 = songRepo.findById(sid).get();
        if(song1 != null) {
            songRepo.deleteById(sid);
            return "Song Deleted successfully";
        }
        return "Song Not Found";
    }

    public String likeSong(String sid, int likes) {
        Song song = songRepo.findById(sid).get();
        song.setLikes(likes);
        songRepo.save(song);
        return "Liked successfully";
    }

    
    

}
