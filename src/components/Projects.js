import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import Fade from 'react-reveal/Fade'; 
import './Projects.css'

function Projects() {

  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState('');
  const projects = useSelector(state => state)

  function handleClick(projectName) {
    setSelected(projectName);
    setClicked(!clicked);
  }

  function displayDetails(projectName) {
    const selectedProject = projects.find(project => project.name === projectName);
    return(
      <div onClick={() => handleClick()}>
        <div>{selectedProject.type}</div>
        <div>{selectedProject.name}</div>
        <div>{selectedProject.description}</div>
        <div>
          github
          external
        </div>
        <div>
          <h6>map tech stack</h6>
        </div>
      </div>
    )
  }

  return (
      <div className='ProjectContainer'>
      {clicked ?
      <div>{displayDetails(selected)}</div>
      :
        <ul className='ProjectList'>
          {projects.map((project, i) => (
            <div>
              <li id={i} className='ProjectElement' onClick={() => handleClick(project.name)}>
                <span className='ProjectYear'>{project.year}</span>
                <span>{project.name}</span>
                <span className='ProjectTech'>{project.type}</span>
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
