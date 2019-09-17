import React from 'react'
import './header.styles.scss'
import SideBarToggleButton from '../SideBar/SideBarToggleButton';

const Header = () => (
  <header className='header'>
    <nav className='header-nav'>
      <div>
        <SideBarToggleButton />
      </div>
      <div className='header-logo'><a href="/">The Logo</a></div>
      <div className='spacer' />
      <div className='header-nav-items'>
        <ul>
          <li><a href="/">Work</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
