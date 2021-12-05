import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useState, useEffect, useLocation } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from 'services/movieApi';

function MoviesPage() {
  // const location = useLocation();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    movieApi.fetchMoviesBySearch(query).then(data => setMovies(data.results));
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
  };
  return (
    <div>
      <SearchMovies onSubmit={onSubmit} />
      <>
        <ul>
          {movies.map(({ id, title, poster_path, name }) => (
            <li key={id}>
              <Link
                to={`${id}`}
                // state={{ from: location }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                  alt={title || name}
                ></img>
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}
export { MoviesPage };
