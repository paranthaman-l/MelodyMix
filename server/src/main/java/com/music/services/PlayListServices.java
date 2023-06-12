package com.music.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.music.models.PlayList;
import com.music.repository.PlayListRepo;

@Service
public class PlayListServices {
    
    @Autowired
    private PlayListRepo playListRepo;

    public List<PlayList> getAllPlayLists() {
        return playListRepo.findAll();
    }

    public PlayList getPlayListSong(String pid) {
        return playListRepo.findById(pid).get();
    }
}
