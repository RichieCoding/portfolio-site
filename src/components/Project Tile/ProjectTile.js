import React from 'react'
import './project-tile.styles.scss'

const ProjectTile = ({image, title, description}) => {
  return (
    <div className='project-tile'>
      <h3 className='project-title'>{title}</h3>
      <img className='project-image' src={image} alt="project" />
      <p>{description}</p>
      <div className='top'>
        <h2 className='hover-title'>{title}</h2>
      </div>
    </div>
  )
}

export default ProjectTile
