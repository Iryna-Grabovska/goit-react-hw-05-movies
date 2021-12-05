import { useState } from 'react';
import s from './SearchMovies.module.css';

function SearchMovies({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleQuerySubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return <p>enter the queryn</p>;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <div>
      <form className={s.form} onSubmit={handleQuerySubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search movies"
        />
        <button className={s.btnSearch} type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
export { SearchMovies };
