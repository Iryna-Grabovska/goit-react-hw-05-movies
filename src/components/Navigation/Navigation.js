import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        className={s.NavLink}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        Home
      </NavLink>

      <NavLink
        className={s.NavLink}
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        Movies
      </NavLink>
    </nav>
  );
}
export { Navigation };
