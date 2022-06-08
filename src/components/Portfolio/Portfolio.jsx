import React from 'react'
import Project from './Project'
import projects from './projectDatabase'
import { nanoid } from 'nanoid'

function Portfolio() {

  const projectArray = projects.map(project => {
    return (
      <Project
        key={nanoid()}
        project={project}
      />
    )
  })

  return(
    <div className="projects__content grid filters__active">
      {projectArray}
    </div>
    
  )
}

export default Portfolio
