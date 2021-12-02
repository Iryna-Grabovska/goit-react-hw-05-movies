import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import * as movieApi from 'services/movieApi';

function HomePage() {
  const [movies, setMovies] = useState(null);
  // const moviePoster = {};
  // const onGalleryCardClick = {};
  // const { match } = useMatch();
  useEffect(() => {
    movieApi.fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                ></img>
                <p> {movie.title || movie.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export { HomePage };
