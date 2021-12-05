import { Routes, Route, Link } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import slugify from 'slugify';
import * as movieApi from 'services/movieApi';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

function MovieDetailsPage() {
  const location = useLocation();
  console.log(location);
  const history = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const goBackBtn = () => {
    history.push(
      location?.state?.from,
      // ?? '/',
      // location.state?.from?.pathname
      //   ? `${location.state?.from?.pathname}${location.state?.from?.search}`
      //   : '/',
    );
  };
  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  return (
    <div>
      {movie && (
        <>
          <button type="button" onClick={goBackBtn}>
            go back
          </button>

          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title || movie.name}
          ></img>
          <h2>{movie.title}</h2>
          <p>
            release date:
            <span> {movie.release_date}</span>
          </p>
          <p>genres: {movie.genres.map(genre => genre.name)}</p>
          <p>Overview: {movie.overview}</p>
          <p>Rating:{movie.vote_average}</p>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{
              from: location.from,
            }}
          >
            cast
          </Link>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{
              from: location.from,
            }}
          >
            reviews
          </Link>

          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export { MovieDetailsPage };
