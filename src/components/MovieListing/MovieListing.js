import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
} from "../../features_redux/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
function MovieListing() {
  const movies = useSelector(getAllMovies); //getAllmovies is a selector, we could have just, instead of movies typed inline (state)=>state.movies.movies
  const shows = useSelector(getAllShows); //getAllShows is a selector, we could have just, instead of shows typed inline (state)=>state.movies.shows
  //console.log("movies free :", movies);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;
