import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import Fade from 'react-reveal/Fade'; 
import './Projects.css'

function Projects() {

  const [clicked, setClicked] = useState(false);
  const projects = useSelector(state => state)

  function handleClick() {
    setClicked(!clicked);
  }

  return (
      <div className='ProjectContainer'>
      {clicked ?
      <div onClick={() => handleClick()}>Details go here</div>
      :
        <ul className='ProjectList'>
          {projects.map((project, i) => (
            <div>
              <li id={i} className='ProjectElement' onClick={() => handleClick()}>
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
      }
      </div>
  )
}

export default Projects
