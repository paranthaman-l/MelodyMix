package com.music.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Song {

    @Id
    private String sid;
    private String title;
    private String audio;
    private String thumnail;
    private String length;
    private List<String> mood;
    private String description;

    private boolean ispremium;

    private String movie;
    private String movieimg;
    private String music;
    private String lyricist;
    private List<String> singers;

    private int views;
    private int likes;

    public Song() {
        super();
    }

    public Song(String sid, String title, String audio, String thumnail, String length, List<String> mood,
            String description, boolean ispremium, String movie, String movieimg, String music,
            String lyricist, List<String> singers, int views, int likes) {
        this.sid = sid;
        this.title = title;
        this.audio = audio;
        this.thumnail = thumnail;
        this.length = length;
        this.mood = mood;
        this.description = description;
        this.ispremium = ispremium;
        this.movie = movie;
        this.movieimg = movieimg;
        this.music = music;
        this.lyricist = lyricist;
        this.singers = singers;
        this.views = views;
        this.likes = likes;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public String getThumnail() {
        return thumnail;
    }

    public void setThumnail(String thumnail) {
        this.thumnail = thumnail;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public List<String> getMood() {
        return mood;
    }

    public void setMood(List<String> mood) {
        this.mood = mood;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isIspremium() {
        return ispremium;
    }

    public void setIspremium(boolean ispremium) {
        this.ispremium = ispremium;
    }
    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getMovieimg() {
        return movieimg;
    }

    public void setMovieimg(String movieimg) {
        this.movieimg = movieimg;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public String getLyricist() {
        return lyricist;
    }

    public void setLyricist(String lyricist) {
        this.lyricist = lyricist;
    }

    public List<String> getSingers() {
        return singers;
    }

    public void setSingers(List<String> singers) {
        this.singers = singers;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

}
