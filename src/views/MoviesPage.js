import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieApi from 'services/movieApi';
import './Movie.scss';

function MoviesPage() {
  const location = useLocation();

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
  // if (movies.length === 0) {
  //   return <p>sorry</p>;
  // }
  return (
    <div>
      <SearchMovies onSubmit={onSubmit} />
      <>
        <ul className="ImageGallery">
          {movies.map(({ id, title, poster_path, name }) => (
            <li key={id} className="ImageGalleryItem">
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  className="ImageGalleryItemImage"
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
export default MoviesPage;
