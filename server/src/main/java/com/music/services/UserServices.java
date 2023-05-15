package com.music.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.music.models.PlayList;
import com.music.models.Song;
import com.music.models.User;
import com.music.repository.PlayListRepo;
import com.music.repository.SongRepo;
import com.music.repository.UserRepo;

@Service
public class UserServices {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private SongRepo songRepo;
    @Autowired
    private PlayListRepo playListRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User loginUser(String email) {
        User user = userRepo.findByEmail(email);
        return user;
    }

    public User signupUser(User user) {
        User existUser = userRepo.findByEmail(user.getEmail());
        if (existUser == null) {
            UUID uuid = UUID.randomUUID();
            System.out.println(uuid.toString());
            user.setUid(uuid.toString());
            return userRepo.save(user);
        }
        return null;
    }

    public String deleteUser(String uid) {
        Optional<User> existUser = userRepo.findById(uid);
        if (!existUser.isEmpty()) {
            userRepo.deleteById(uid);
            return "The user has been deleted Successfully";
        }
        return "User Not Found";
    }

    public String updateUser(String uid, User user) {
        User existUser = userRepo.findByEmail(user.getEmail());

        if (existUser != null) {
            user.setUid(uid);
            userRepo.save(user);
            return "The user has been Updated Successfully";
        }
        return "User Not Found";
    }

    public User addSong(String uid, Song song) {
        User user = userRepo.findById(uid).get();
        user.getSongs().add(song);
        return userRepo.save(user);
    }

    public String deleteSong(String uid, String sid) {
        User user = userRepo.findById(uid).get();
        Song song = songRepo.findById(sid).get();
        songRepo.deleteById(sid);
        user.getSongs().remove(song);
        userRepo.save(user);
        return "Song deleted";
    }

    public User updateSong(String uid, Song song) {
        User user = userRepo.findById(uid).get();
        Song newSong = song;
        songRepo.deleteById(song.getSid());
        user.getSongs().add(newSong);
        return userRepo.save(user);
    }

    public User addLikedSong(String uid, String sid) {
        User user = userRepo.findById(uid).get();
        user.getLikedsongs().add(sid);
        return userRepo.save(user);
    }

    public User deleteLikedSong(String uid, String sid) {
        User user = userRepo.findById(uid).get();
        user.getLikedsongs().remove(sid);
        return userRepo.save(user);
    }

    public User addPlaylist(String uid, PlayList playList) {
        User user = userRepo.findById(uid).get();
        user.getPlaylists().add(playList);
        return userRepo.save(user);
    }

    public User deletePlaylist(String uid, String pid) {
        User user = userRepo.findById(uid).get();
        PlayList playlist = playListRepo.findById(pid).get();
        playListRepo.deleteById(pid);
        user.getPlaylists().remove(playlist);
        return userRepo.save(user);
    }

    public User addPlayListSong(String uid, String pid, String sid) {
        User user = userRepo.findById(uid).get();
        PlayList playlist = playListRepo.findById(pid).get();
        playListRepo.deleteById(pid);
        playlist.getSongs().add(sid);
        user.getPlaylists().add(playlist);
        return userRepo.save(user);
    }

    public User getUser(String uid) {
        return userRepo.findById(uid).get();
    }

    public User updateProfile(String uid, String profile) {
        User user = userRepo.findById(uid).get();
        System.out.println(uid+profile);
        user.getProfile().add(profile);
        return userRepo.save(user);
    }

}
