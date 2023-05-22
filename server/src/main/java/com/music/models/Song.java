package com.music.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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

}
