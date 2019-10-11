import React from "react";
import "./header.styles.scss";
import { NavLink, Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

const Header = (props) => {
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
  }
  return (
    <header className='header'>
      <nav className='header-nav'>
        <div onClick={props.handleNameClick} className='header-logo'>
          <Link to='/'>Richard Li</Link>
        </div>
        <div className='header-nav-items'>
          <ul>
            <li>
              <NavLink activeClassName='active' isActive={checkActive} to='/'>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
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
