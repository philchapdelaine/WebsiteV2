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
    name: 'Park Hangs',
    year: 2020,
    tech: 
    [
      'Full Stack Dev'
    ]
  },
]

function Projects() {
    
  return (
      <div className='ProjectContainer'>
        <ul className='ProjectList'>
          {projects.map((project) => (
            <div>
              <li>
                <span>{project.year}</span>
                <span>{project.name}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
  )
}

export default Projects
