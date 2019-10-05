import React from 'react'
import './menu-page.styles.scss'
import { Link } from 'react-router-dom'

const MenuPage = (props) => {
  return (
    <div className='menu-page'>
      <Link to='/projects' onClick={props.handleMenuClicked}><h3>Projects</h3></Link>
      <Link to='/about' onClick={props.handleMenuClicked}><h3>About</h3></Link>
      <Link to='/contact' onClick={props.handleMenuClicked}><h3>Contact</h3></Link>
    </div>
  )
}

export default MenuPage
