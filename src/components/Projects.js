import React from 'react'
import './Projects.css'

const projects = [
  {
    name: 'AE Proposal Builder',
    year: 2021,
    tech: 
    [
      'Front End Dev'
    ]
  },
  {
    name: 'PrologPather',
    year: 2021,
    tech: 
    [
      'Algorithms'
    ]
  },
  {
    name: 'Personal Website',
    year: 2021,
    tech: 
    [
      'Front End Dev'
    ]
  },
  {
    name: 'Muscle Monsters',
    year: 2021,
    tech: 
    [
      'UX Research'
    ]
  },
  {
    name: 'Park Hangs',
    year: 2020,
    tech: 
    [
      'Full Stack Dev'
    ]
  },
  {
    name: 'Game of Probable Life',
    year: 2020,
    tech: 
    [
      'Algorithms'
    ]
  },
]

function Projects() {
    
  return (
      <div className='ProjectContainer'>
        <ul className='ProjectList'>
          {projects.map((project) => (
            <div>
              <li className='ProjectElement'>
                <span className='ProjectYear'>{project.year}</span>
                <span>{project.name}</span>
                {project.tech.map((technology) => 
                  <span className='ProjectTech'>{technology}</span>
                  )}
                <div className='ProjectTagline'>Web app to build proposals for new client work</div>
              </li>
            </div>
          ))}
        </ul>
      </div>
  )
}

export default Projects
