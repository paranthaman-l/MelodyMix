package com.music.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.music.models.Movie;
import com.music.models.Song;
import com.music.repository.MovieRepo;
import com.music.repository.SongRepo;

@Service
public class SongServices {

    @Autowired
    private SongRepo songRepo;
    @Autowired
    private MovieRepo movieRepo;

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
        if (song1 != null) {
            song.setSid(sid);
            songRepo.save(song);
            return "Song Updated successfully";
        }
        return "Song Not Found";
    }

    public String deleteSong(String sid) {
        Song song1 = songRepo.findById(sid).get();
        if (song1 != null) {
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

    public List<Song> getByMovie(String mid) {
        Movie movie = movieRepo.findById(mid).get();
        List<Song> songs = songRepo.findAllByMovie(movie);
        if (songs == null)
            return null;
        return songRepo.findAllByMovie(movie);
    }

    public void addImg(String sid, String filename) {
        Song song = songRepo.findById(sid).get();
        song.setThumnail(filename);
        song.getMovie().setMovieimg(filename);
        songRepo.save(song);
    }

    public void addSongUrl(String sid, String filename) {
        Song song = songRepo.findById(sid).get();
        song.setAudio(filename);
        songRepo.save(song);
    }

    public List<Song> addView(String sid) {
        Song song = songRepo.findById(sid).get();
        song.setViews(song.getViews()+1);
        songRepo.save(song);
        return songRepo.findAll();
    }

    public List<Song> getSongByTitle(String title) {
        return songRepo.findAllByTitleContainingIgnoreCase(title);
    }

    public List<Song> getTrending() {
        return songRepo.findAll(Sort.by(Direction.DESC,"views"));
    }


}
