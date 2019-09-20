import React from 'react'
import './project-page.styles.scss'
import Shoppie from '../../assets/images/Mod5-01.png'
import Shoppie2 from '../../assets/images/Chello2-01.png'
import Shoppie3 from '../../assets/images/ProjectTile3.png'
import Shoppie4 from '../../assets/images/Project2.png'
import ProjectTile from '../../components/Project Tile/ProjectTile'

const ProjectPage = () => {
  return (
    <div className='project-page'>
      <ProjectTile image={Shoppie} title='Shoppie' />
      <ProjectTile image={Shoppie2} title='Chello' />
      <ProjectTile image={Shoppie3} title='Critter' />
      <ProjectTile image={Shoppie4} title='oKupid' />
    </div>
  )
}

export default ProjectPage
