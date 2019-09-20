import React from 'react'

const ProjectTile = ({image, title, description}) => {
  return (
    <div className='project-tile'>
      <img src={title} alt="project"/>
    </div>
  )
}

export default ProjectTile
