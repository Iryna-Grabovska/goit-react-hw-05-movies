import * as movieApi from 'services/movieApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieApi
      .fetchMovieReviews(movieId)

      .then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length >= 1 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry,we don't have reviews about this movie.</p>
      )}
    </>
  );
}
export { Reviews };
