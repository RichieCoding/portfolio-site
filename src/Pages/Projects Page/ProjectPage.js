import React from 'react'
import './project-page.styles.scss'
import Shoppie from '../../assets/images/ShoppieProject.png'
import Shoppie2 from '../../assets/images/Project2.png'
import Shoppie3 from '../../assets/images/ProjectTile3.png'
import Shoppie4 from '../../assets/images/hello.png'

const ProjectPage = () => {
  return (
    <div className='project-page'>
      <h3 className='project-title'>Shoppie</h3>
      <img className='project-image' src={Shoppie} alt="shop" />
      <h3 className='project-title'>Chello</h3>
      <img className='project-image' src={Shoppie2} alt="shop" />
      <h3 className='project-title'>Critter</h3>
      <img className='project-image' src={Shoppie3} alt="shop" />
      <h3 className='project-title'>Critter</h3>
      <img className='project-image' src={Shoppie4} alt="shop" />
    </div>
  )
}

export default ProjectPage
