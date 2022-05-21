import React from 'react'
import skills from './skillsDatabase'
import { RiCheckboxCircleLine } from 'react-icons/ri'

function Skills() {
  const frontendSkills = skills.frontendSkills.map(skill => {
    return (
      <div className="skills__data">
        <RiCheckboxCircleLine className="icon"/>
        <div>
          <h3 className="skills__name">{skill.skill}</h3>
          <span className="skills__level">{skill.level}</span>
        </div>
      </div>
    )
  })

  const backendSkills = skills.backendSkills.map(skill => {
    return (
      <div className="skills__data">
        <RiCheckboxCircleLine className="icon"/>
        <div>
          <h3 className="skills__name">{skill.skill}</h3>
          <span className="skills__level">{skill.level}</span>
        </div>
      </div>
    )
  })

  return(
    <div className="skills__content grid">
      <div className="skills__area">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            {frontendSkills}
          </div>
        </div>
      </div>

      <div className="skills__area">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            {backendSkills}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
