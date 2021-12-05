import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import * as movieApi from 'services/movieApi';
import s from './Cast.module.css';
function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    movieApi
      .fetchMovieCredits(movieId)
      .then(data => setCast(data.cast.filter(actor => actor.popularity > 4)));
  }, [movieId]);
  return (
    <>
      <ul className={s.CastGallery}>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              className={s.CastImage}
              src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
export { Cast };
