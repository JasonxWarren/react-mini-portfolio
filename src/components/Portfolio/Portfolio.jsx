import React from 'react'
import Project from './Project'
import projects from './projectDatabase'

function Portfolio() {

  const projectArray = projects.map(project => {
    return <Project project={project}/>
  })

  return(
    <div className="projects__content grid filters__active">
      {projectArray}
    </div>
  )
}

export default Portfolio
