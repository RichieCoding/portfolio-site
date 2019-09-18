import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = props => (
  <header className='header'>
    <nav className='header-nav'>
      <div className='header-logo'>
        <Link to='/'>Richard Li</Link>
      </div>
      <div className='header-nav-items'>
        <ul>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
