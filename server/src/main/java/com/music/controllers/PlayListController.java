package com.music.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.music.models.PlayList;
import com.music.services.PlayListServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/playlists")
public class PlayListController {
    @Autowired
    private PlayListServices playListServices;

    @GetMapping("/")
    public String index() {
        return "Hii I am PlayList Controller";
    }

    @GetMapping("/all")
    public List<PlayList> getAllPlayLists() {
        return playListServices.getAllPlayLists();
    }
    @GetMapping("/getPlayList")
    public PlayList getAllSongList(@RequestParam String pid) {
        return playListServices.getPlayListSong(pid);
    }
}
