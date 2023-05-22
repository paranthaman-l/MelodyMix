package com.music.services;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.music.models.PlayList;
import com.music.models.Song;
import com.music.models.User;
import com.music.repository.PlayListRepo;
import com.music.repository.SongRepo;
import com.music.repository.UserRepo;
import com.music.utils.PasswordUtils;

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

    public String loginUser(String email, String password) {
        User user = userRepo.findByEmail(email);
        if (user == null)
            return "Invalid email";
        if (PasswordUtils.matchPassword(password, user.getPassword()))
            return user.getUid();
        return "Invalid password";
    }

    public User signupUser(User user) {
        User existUser = userRepo.findByEmail(user.getEmail());
        if (existUser == null) {
            UUID uuid = UUID.randomUUID();
            user.setUid(uuid.toString());
            user.setPassword(PasswordUtils.encryptPassword(user.getPassword()));
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
        UUID sid = UUID.randomUUID();
        song.setSid(sid.toString());
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
        if (user.getLikedsongs() == null) {
            Set<String> likedSongs = new HashSet<>();
            likedSongs.add(sid);
            user.setLikedsongs(likedSongs);
        } else {
            if(user.getLikedsongs().add(sid)){
                user.getLikedsongs().add(sid);
            }
            else{
                deleteLikedSong(uid, sid);
            }
        }
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
        System.out.println(uid + profile);
        user.getProfile().add(profile);
        return userRepo.save(user);
    }

    public List<User> getUsersUsingPagination(int pageSize, int offset, String field, String sortDirection) {
        Pageable pageable;
        if(sortDirection.equals("asc"))
            pageable = PageRequest.of(pageSize, offset,Sort.by(Direction.ASC, field));
        else
            pageable = PageRequest.of(pageSize, offset,Sort.by(Direction.DESC, field));

        return userRepo.findAll(pageable).getContent();
    }

}
