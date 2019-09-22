import React from 'react'
import './shoppie-page.styles.scss'
import Shoppie from '../../assets/images/main-shoppie-01.png'

const ShoppiePage = () => {
  return (
    <div className='shoppie-page'>
      <div className='main-image'>
        <img src={Shoppie} alt="project"/>
        <div className='project-buttons'>
        <a href="https://github.com/RichieCoding/Ecommerce-Front-End" target='_blank'><p>Demo</p></a>
        <a href="https://github.com/RichieCoding/Ecommerce-Front-End" target='_blank'><p>Github</p></a>
        </div>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default ShoppiePage
