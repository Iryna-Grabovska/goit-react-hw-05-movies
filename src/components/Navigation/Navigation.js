import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="">
      <NavLink to="/" className="">
        Home
      </NavLink>

      <NavLink to="/movies" className="">
        Movies
      </NavLink>
    </nav>
  );
}
export { Navigation };
