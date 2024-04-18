package Code_Workouts.JavaWorkouts.Collections.Comparable;

import java.util.ArrayList;
import java.util.Collections;

public class App {

    public static void main(String[] args) {
        ArrayList<Movie> list = new ArrayList<Movie>();
        list.add(new Movie("Lilly",4.5,1977));
        list.add(new Movie("Micheal",3.5,1956));
        list.add(new Movie("Calvin",4.8,1972));
        list.add(new Movie("Rose Inn",5.0,2018));

        Collections.sort(list);

        for(Movie movie:list){
            System.out.println(movie.getMovie()+" "+movie.getRating()+" "+movie.getYear());
        }
    }


}
