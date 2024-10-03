package com.music.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.music.models.Movie;
import com.music.repository.MovieRepo;

@Service
public class MovieServices {
    @Autowired
    private MovieRepo movieRepo;

    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }

    public String addMovie(Movie movie) {
        UUID mid = UUID.randomUUID();
        movie.setMid(mid.toString());
        movieRepo.save(movie);
        return movie.getMid();
    }

    public String updateMovie(String mid, Movie movie) {
        return null;
    }

    public String deleteMovie(String mid) {
        return null;
    }

    public Movie getMovieByMid(String mid) {
        return movieRepo.findById(mid).get();
    }

}
