package com.music.models;

import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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

    private Set<String> likedsongs;  
}
