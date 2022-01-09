import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import './Projects.css'

function Projects() {

  const projects = useSelector(state => state)

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
