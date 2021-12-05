import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieApi from 'services/movieApi';
import './Movie.scss';
function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    movieApi.fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Trending movies</h1>

      {movies && (
        <ul className="ImageGallery">
          {movies.map(movie => (
            <li key={movie.id} className="ImageGalleryItem">
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  className="ImageGalleryItemImage"
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
export default HomePage;
