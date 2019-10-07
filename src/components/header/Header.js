import React, { Component } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

const Header = (props) => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <div className='header-logo'>
          <Link to='/'>Richard Li</Link>
        </div>
        <div className='header-nav-items'>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='menu-icon'>
          <HamburgerMenu
            isOpen={props.isOpen}
            menuClicked={props.handleMenuOpen}
            width={25}
            height={18}
            // color={"rgb(67,38,235)"}
            color={'black'}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
