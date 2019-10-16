package Code_Workouts.JavaWorkouts.Collections.Comparable;

import java.util.*;

public class Movie implements Comparable<Movie> {

    private String movie;
    private double rating;
    private int year;

    @Override
    public int compareTo(Movie movie) {
        return this.year - movie.year;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    Movie(String movie, double rating, int year){
        this.movie = movie;
        this.rating = rating;
        this.year = year;
    }

}
