package com.music.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Movie {
    @Id
    private String mid;
    private String movie;
    private String movieimg;
    private String music;
    private String year;

    public Movie() {
        super();
    }

    public Movie(String mid, String movie, String movieimg, String music, String year) {
        this.mid = mid;
        this.movie = movie;
        this.movieimg = movieimg;
        this.music = music;
        this.year = year;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
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

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

}