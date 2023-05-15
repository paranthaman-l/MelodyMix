package com.music.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PlayList {

    @Id
    private String pid;
    private String name;
    private String description;
    private String image;
    private List<String> songs;

    public PlayList() {
        super();
    }

    public PlayList(String pid, String name, String description, String image, List<String> songs) {
        this.pid = pid;
        this.name = name;
        this.description = description;
        this.image = image;
        this.songs = songs;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getSongs() {
        return songs;
    }

    public void setSongs(List<String> songs) {
        this.songs = songs;
    }

}
