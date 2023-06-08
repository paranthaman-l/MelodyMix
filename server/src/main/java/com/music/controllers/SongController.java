package com.music.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.music.models.Song;
import com.music.services.SongServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/songs")
public class SongController {

    @Autowired
    private SongServices songServices;

    @GetMapping("/")
    public String index() {
        return "Hii I am Song Controller";
    }

    @GetMapping("/all")
    public List<Song> getAllSongs() {
        return songServices.getAllSongs();
    }

    @PostMapping("/add")
    public String addSong(@RequestBody Song song) {
        return songServices.addSong(song);
    }

    @PutMapping("/update")
    public String updateSong(@RequestParam String sid, @RequestBody Song song) {
        return songServices.updateSong(sid, song);
    }

    @DeleteMapping("/delete")
    public String deleteSong(@RequestParam String sid) {
        return songServices.deleteSong(sid);
    }

    @PutMapping("/likesong")
    public String likeSong(@RequestParam String sid, @RequestParam int likes) {
        return songServices.likeSong(sid, likes);
    }

    @GetMapping("/bymovieid")
    public List<Song> getByMovie(@RequestParam String mid) {
        return songServices.getByMovie(mid);
    }

    @PutMapping("/addimg/{sid}/{filename}")
    public void addImg(@PathVariable String sid, @PathVariable String filename) {
        songServices.addImg(sid, filename);
    }

    @PutMapping("/addsongurl/{sid}/{filename}")
    public void addSongUrl(@PathVariable String sid, @PathVariable String filename) {
        songServices.addSongUrl(sid, filename);
    }

    @PutMapping("/addview/{sid}")
    public List<Song> addView(@PathVariable String sid) {
        return songServices.addView(sid);
    }

    @GetMapping("/getbytitle")
    public List<Song> getByTitle(@RequestParam String title) {
        return songServices.getSongByTitle(title);
    }

    @GetMapping("/gettrending")
    public List<Song> getTrending(){
        return songServices.getTrending();
    }
}
