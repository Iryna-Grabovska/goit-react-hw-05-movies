import { Routes, Route, NavLink } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import slugify from 'slugify';
import * as movieApi from 'services/movieApi';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

function MovieDetailsPage() {
  const location = useLocation();

  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const goBackBtn = () => {
    navigate(
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
          <button className="btnGoBack" type="button" onClick={goBackBtn}>
            Go Back
          </button>
          <div className="MovieDetails">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.title || movie.name}
              ></img>
            </div>
            <div className="MovieDescription">
              <h2 style={{ color: 'rgb(52, 52, 109)' }}>{movie.title}</h2>
              <p className="description">
                Release Date:
                <span className="descriptionSpan"> {movie.release_date}</span>
              </p>
              <p className="description">
                Genres:
                <span className="descriptionSpan">
                  {movie.genres.map(genre => genre.name)}
                </span>
              </p>
              <p className="description">
                Overview:
                <span className="descriptionSpan">{movie.overview} </span>
              </p>
              <p className="description">
                Rating:
                <span className="descriptionSpan">{movie.vote_average}</span>
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NavLink
              className="cast"
              style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
              })}
              to={`/movies/${movieId}/cast`}
              state={{
                from: location.from?.location,
              }}
            >
              Cast
            </NavLink>
            <NavLink
              className="cast"
              style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
              })}
              to={`/movies/${movieId}/reviews`}
              state={{
                from: location.from,
              }}
            >
              Reviews
            </NavLink>
          </div>

          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default MovieDetailsPage;
