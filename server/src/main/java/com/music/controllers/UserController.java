package com.music.controllers;

import java.lang.annotation.Repeatable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.music.models.PlayList;
import com.music.models.Song;
import com.music.models.User;
import com.music.services.UserServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServices userServices;

    @GetMapping("/")
    public String index() {
        return "Hii I am User Controller";
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userServices.getAllUsers();
    }

    @GetMapping("/login")
    public String loginUser(@RequestParam String email,@RequestParam String password) {
        return userServices.loginUser(email,password);
    }

    @PostMapping("/signup")
    public User signupUser(@RequestBody User user) {
        return userServices.signupUser(user);
    }

    @GetMapping("/getuser")
    public User getUser(@RequestParam String uid){
        return userServices.getUser(uid);
    }

    @PutMapping("/update")
    public String updateUser(@RequestParam String uid, @RequestBody User user) {
        return userServices.updateUser(uid, user);
    }

    @DeleteMapping("/delete")
    public String deleteUser(@RequestParam String uid) {
        return userServices.deleteUser(uid);
    }

    @PutMapping("/updateprofile")
    public User updateProfile(@RequestParam String uid, @RequestParam String profile){
        return userServices.updateProfile(uid, profile);
    }

    @PostMapping("/addsong")
    public User addSong(@RequestParam String uid, @RequestBody Song song) {
        return userServices.addSong(uid, song);
    }

    @PutMapping("/updatesong")
    public User updateSong(@RequestParam String uid, @RequestBody Song song) {
        return userServices.updateSong(uid, song);
    }

    @DeleteMapping("/deletesong")
    public String deleteSong(@RequestParam String uid, @RequestParam String sid) {
        return userServices.deleteSong(uid, sid);
    }

    @GetMapping("/addlikedsong")
    public User addLikedSong(@RequestParam String uid,@RequestParam String sid) {
        return userServices.addLikedSong(uid,sid);
    }

    @DeleteMapping("/deletelikedsong")
    public User deleteLikedSong(@RequestParam String uid, @RequestParam String sid) {
        return userServices.deleteLikedSong(uid, sid);
    }

    @PostMapping("/addplaylist")
    public User addPlayList(@RequestParam String uid, @RequestBody PlayList playList) {
        return userServices.addPlaylist(uid, playList);
    }

    @DeleteMapping("/deleteplaylist")
    public User deletePlayList(@RequestParam String uid, @RequestParam String pid) {
        return userServices.deletePlaylist(uid, pid);
    }

    @PostMapping("/addplaylistsong")
    public User addPlayList(@RequestParam String uid, @RequestParam String pid, @RequestParam String sid) {
        return userServices.addPlayListSong(uid, pid, sid);
    }
}