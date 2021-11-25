import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import * as movieApi from 'services/movieApi';

function HomePage() {
  const [movies, setMovies] = useState(null);
  // const moviePoster = {};
  // const onGalleryCardClick = {};
  useEffect(() => {
    movieApi.fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>

      {/* <MoviesGallery
        moviePoster={moviePoster}
        onPosterClick={onGalleryCardClick}
      /> */}

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={movie}>
                {/* <img src={movie.backdrop_path} alt={movie.title} /> */}
                <p> {movie.title}</p>
                {/* <p>{movie.popularity}</p> */}
                {/* <img src={movie.backdrop_path}/> */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export { HomePage };
