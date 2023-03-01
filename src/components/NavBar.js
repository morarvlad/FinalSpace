import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav header">
      <Link to="/Home" className="site-title">
        Final Space: Characters
      </Link>
      <ul>
        <li className="nav-item">
          <Link to="/trailer">Trailer</Link>
        </li>
        <li className="nav-item">
          <Link to="/RandomCharacter">Your character</Link>
        </li>
        <li className="nav-item">
          <Link to="/GoodOrEvil">Good or Evil</Link>
        </li>
      </ul>
    </nav>
  );
}
