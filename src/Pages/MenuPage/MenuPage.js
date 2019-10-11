import React from 'react'
import './menu-page.styles.scss'
import { NavLink } from 'react-router-dom'

const MenuPage = (props) => {
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
  }
  return (
    <div className='menu-page'>
      <NavLink activeClassName='active' isActive={checkActive} to='/' onClick={props.menuClicked}><h3>About</h3></NavLink>
      <NavLink activeClassName='active' to='/projects' onClick={props.menuClicked}><h3>Projects</h3></NavLink>
      <NavLink activeClassName='active' to='/contact' onClick={props.menuClicked}><h3>Contact</h3></NavLink>
    </div>
  )
}

export default MenuPage
