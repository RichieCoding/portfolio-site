import React from 'react'
import './chello-page.styles.scss'
import Shoppie from '../../assets/images/main-chello-01.png'

const ChelloPage = () => {
  return (
    <div className='chello-page'>
      <div className='main-image'>
        <div className='image-container'>
          <img src={Shoppie} alt="project"/>
        </div>
        <div className='project-buttons'>
          <a href="https://github.com/RichieCoding/Ecommerce-Front-End" target='_blank'><p>Demo</p></a>
          <a href="https://github.com/RichieCoding/Ecommerce-Front-End" target='_blank'><p>Github</p></a>
        </div>
      </div>
      <div className='chello-header'>
        <div className='main-header'>
          <h3>Chello</h3>
          <p>An ecommerce site that an admin can sign in and manage their ecommerce site. They can track, add, and edit their inventory and view orders
  that were created by customers. A customer can view products, log in and view orders they've placed.</p>
        </div>
        <div className='credentials'>
          <div style={{margin: '20px 0'}}>
            <h4 className='side-title'>Login</h4>
            <p>Username: richie</p>
            <p>Password: abc123</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default ChelloPage
