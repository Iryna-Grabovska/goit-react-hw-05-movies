import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import * as movieApi from 'services/movieApi';

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
      <ul>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
              alt={name}
            />
            <h2>{name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
export { Cast };
