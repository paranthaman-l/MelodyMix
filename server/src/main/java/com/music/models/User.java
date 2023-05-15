package com.music.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class User {
    @Id
    private String uid;
    private String email;
    private String password;

    private String username;

    private boolean ispublic;
    private List<String> profile;

    private boolean ischannel;
    private int supporters;

    private boolean ispremium;

    private List<String> favartists;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_uid", referencedColumnName = "uid")
    private List<Song> songs;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_uid", referencedColumnName = "uid")
    private List<PlayList> playlists;

    private List<String> likedsongs;

    public User() {
        super();
    }

    public User(String uid, String email, String password, String username, Boolean ispublic, List<String> profile,
            boolean ischannel, int supporters, boolean ispremium, List<String> favartists, List<Song> songs,
            List<PlayList> playlists, List<String> likedsongs) {
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.username = username;
        this.ispublic = ispublic;
        this.profile = profile;
        this.ischannel = ischannel;
        this.supporters = supporters;
        this.ispremium = ispremium;
        this.favartists = favartists;
        this.songs = songs;
        this.playlists = playlists;
        this.likedsongs = likedsongs;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Boolean getIspublic() {
        return ispublic;
    }

    public void setIspublic(Boolean ispublic) {
        this.ispublic = ispublic;
    }

    public List<String> getProfile() {
        return profile;
    }

    public void setProfile(List<String> profile) {
        this.profile = profile;
    }

    public boolean isIschannel() {
        return ischannel;
    }

    public void setIschannel(boolean ischannel) {
        this.ischannel = ischannel;
    }

    public int getSupporters() {
        return supporters;
    }

    public void setSupporters(int supporters) {
        this.supporters = supporters;
    }

    public boolean isIspremium() {
        return ispremium;
    }

    public void setIspremium(boolean ispremium) {
        this.ispremium = ispremium;
    }

    public List<String> getFavartists() {
        return favartists;
    }

    public void setFavartists(List<String> favartists) {
        this.favartists = favartists;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }

    public List<PlayList> getPlaylists() {
        return playlists;
    }

    public void setPlaylists(List<PlayList> playlists) {
        this.playlists = playlists;
    }

    public List<String> getLikedsongs() {
        return likedsongs;
    }

    public void setLikedsongs(List<String> likedsongs) {
        this.likedsongs = likedsongs;
    }

    
    

}
