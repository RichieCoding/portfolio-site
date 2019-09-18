import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import deleteIcon from '../../assets/icons/icons8-delete-100.png';
import menuIcon from '../../assets/icons/icons8-menu-96.png';

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
      <div className='menu-icon'>
        {props.menuClicked ? (
          // <FontAwesomeIcon onClick={props.handleMenuClicked} icon={faBars} size='2x' />
          <img onClick={props.handleMenuClicked} style={{width: '25px'}} src={deleteIcon} alt="delete"/>
        ) : (
          // <FontAwesomeIcon onClick={props.handleMenuClicked} icon={faTimes} size='lg' />
          <img onClick={props.handleMenuClicked} style={{width: '25px'}} src={menuIcon} alt="menu"/>
        )}
      </div>
    </nav>
  </header>
);

export default Header;
