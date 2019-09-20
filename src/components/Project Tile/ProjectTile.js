import React from 'react'

const ProjectTile = ({image, title, description}) => {
  return (
    <div className='project-tile'>
      <h3 className='project-title'>{title}</h3>
      <img className='project-image' src={image} alt="project" />
    </div>
  )
}

export default ProjectTile
