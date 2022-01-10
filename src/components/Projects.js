import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import Fade from 'react-reveal/Fade'; 
import './Projects.css'

function Projects() {

  const projects = useSelector(state => state)

  return (
      <div className='ProjectContainer'>
        <Fade top cascade>
          <ul className='ProjectList'>
            {projects.map((project, i) => (
              <div>
                <li id={i} className='ProjectElement'>
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
        </Fade>
      </div>
  )
}

export default Projects
