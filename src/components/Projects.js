import React, {useState, useEffect} from "react"
import './Projects.css'

const initialProjects = [
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
    description: "Conway's Game of Life implementation in Haskell",
    tech: 
    [
      'Algorithms'
    ]
  },
]

function Projects() {

  const [projects, setProjects] = useState(initialProjects);

  function handleClick() {
    let skillUsed = 'Front End Dev';
    let filterProjects = []
    if (skillUsed === "All") {
      filterProjects = projects;
    } else {
      filterProjects = projects.filter(project => project.tech.includes(skillUsed));
      console.log(filterProjects);
    }
    setProjects(filterProjects);
  }

  function handleClick2() {
    setProjects(initialProjects);
  }

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
        <div><button onClick={handleClick}>Test</button> <button onClick={handleClick2}>Test2</button></div>
      </div>
  )
}

export default Projects
