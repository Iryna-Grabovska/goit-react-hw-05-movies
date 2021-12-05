import { useState } from 'react';
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
      <form onSubmit={handleQuerySubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
export { SearchMovies };
