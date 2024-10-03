package com.music.services;

import java.util.List;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.music.models.Movie;
import com.music.models.Song;
import com.music.models.User;
import com.music.repository.MovieRepo;
import com.music.repository.SongRepo;
import com.music.repository.UserRepo;

@Service
public class SongServices {

    @Autowired
    private SongRepo songRepo;
    @Autowired
    private MovieRepo movieRepo;
    @Autowired
    private UserRepo userRepo;

    public List<Song> getAllSongs() {
        return songRepo.findAll();
    }

    public String addSong(Song song) {
        UUID sid = UUID.randomUUID();
        song.setSid(sid.toString());
        songRepo.save(song);
        return "Song Added Successfully";
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

    public Song addSongUrl(String sid, String filename) {
        Song song = songRepo.findById(sid).get();
        song.setAudio(filename);
        return songRepo.save(song);
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

    public List<Song> getLikedSongs(String uid) {
         User user = userRepo.findById(uid).get();
        Set<String> likedSongsSid = user.getLikedsongs();
        return songRepo.findAllById(likedSongsSid);
    }

    public List<Song> getGenreListSongs(String mood) {
        
        return null;
}

    public Song getById(String sid) {
        return songRepo.findById(sid).get();
    }

    public List<Song> getUsersUsingPagination(int pageSize, int offset, String field, String sortDirection) {
         Pageable pageable = PageRequest.of(offset, pageSize, Sort.by(Direction.fromString(sortDirection), field));
        return songRepo.findAll(pageable).getContent();
    }

    public Long getCount() {
        return songRepo.count();
    }


}
