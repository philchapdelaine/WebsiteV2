import React from 'react'
import './Projects.css'

const projects = [
  {
    name: 'AE Proposal Builder',
    year: 2021,
    description: 'Web app to build proposals for new client work.',
    tech: 
    [
      'Front End Dev'
    ]
  },
  {
    name: 'PrologPather',
    year: 2021,
    description: 'UBC pathfinding app, built in Prolog.',
    tech: 
    [
      'Algorithms'
    ]
  },
  {
    name: 'Personal Website',
    year: 2021,
    description: 'Personal website built using Gatsby.',
    tech: 
    [
      'Front End Dev'
    ]
  },
  {
    name: 'Muscle Monsters',
    year: 2021,
    description: 'Design of a social exercise app for the pandemic.',
    tech: 
    [
      'UX Research'
    ]
  },
  {
    name: 'Park Hangs',
    year: 2020,
    description: 'Web app that displays information on Vancouver parks',
    tech: 
    [
      'Full Stack Dev'
    ]
  },
  {
    name: 'Game of Probable Life',
    year: 2020,
    description: 'Game of Life implementation in Haskell',
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
                <div className='ProjectTagline'>{project.description}</div>
              </li>
            </div>
          ))}
        </ul>
      </div>
  )
}

export default Projects
