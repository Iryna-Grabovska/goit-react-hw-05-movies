import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'orange' : 'brown',
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? 'orange' : 'brown',
        })}
      >
        Movies
      </NavLink>
    </nav>
  );
}
export { Navigation };
