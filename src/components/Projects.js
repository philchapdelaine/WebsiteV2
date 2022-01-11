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
    const selectedProject = projects.find(project => project.name === projectName) || null;
    if (selectedProject === null) {
      return(
        <div>Thanks for checking out my projects.</div>
      )
    } else {
      const hasGit = (selectedProject.github !== undefined)
      const hasExt = (selectedProject.external !== undefined)

      let gitLink;
      if (hasGit) {
        gitLink = <a className="DetailLinks" href={selectedProject.github} target="_blank" rel="noopener noreferrer">Github</a>
      } else {
        gitLink = ""
      }
      
      let externalLink;
      if (hasExt) {
        externalLink = <a className="DetailLinks" href={selectedProject.external} target="_blank" rel="noopener noreferrer">External</a>
      } else {
        externalLink = ""
      }

      return(
        <div>
          <div className="Back">
            <button className="Button" onClick={() => handleClick()}>back</button>
          </div>
          <div>{selectedProject.type}</div>
          <div className="DetailName">{selectedProject.name}</div>
          <div className="DetailDescription">{selectedProject.description}</div>
          <div className="DetailLinks">
            {gitLink}
            {externalLink}
          </div>
          <div>
            {selectedProject.tech.map((technology, i) => (
              <div key={selectedProject.name + technology} className="DetailTech">+{technology} </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
      <div className='ProjectContainer'>
      {clicked ?
      <div>{displayDetails(selected)}</div>
      :
        <ul className='ProjectList'>
          {projects.map((project) => (
            <div key={project.name}>
              <li className='ProjectElement' onClick={() => handleClick(project.name)}>
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
