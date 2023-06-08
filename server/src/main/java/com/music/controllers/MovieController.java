package com.music.controllers;

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

import com.music.models.Movie;
import com.music.services.MovieServices;

@RestController
@RequestMapping("/movie")
@CrossOrigin("*")
public class MovieController {

    @Autowired
    private MovieServices movieServices;

    @GetMapping("/")
    public String index() {
        return "Hii I am Movie Controller";
    }

    @GetMapping("/all")
    public List<Movie> getAllMovies() {
        return movieServices.getAllMovies();
    }

    @GetMapping("/getbymid")
    public Movie getMovieByMid(@RequestParam String mid) {
        return movieServices.getMovieByMid(mid);
    }
    @PostMapping("/add")
    public String addMovie(@RequestBody Movie movie) {
        return movieServices.addMovie(movie);
    }

    @PutMapping("/update")
    public String updateMovie(@RequestParam String mid, @RequestBody Movie movie) {
        return movieServices.updateMovie(mid, movie);
    }

    @DeleteMapping("/delete")
    public String deleteMovie(@RequestParam String mid) {
        return movieServices.deleteMovie(mid);
    }
}
