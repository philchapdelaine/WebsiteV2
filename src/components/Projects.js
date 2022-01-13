import React, { useState } from "react"
import { useSelector } from "react-redux"
import './Projects.css'
import parkhangs from '../images/parkhangs.png'
import uxProject444 from '../images/444_project.png'
import uxProjectMeetup from '../images/meetup.png'
import website from '../images/website.png'
import websiteV2 from '../images/websitev2.png'

function Projects() {

  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState('');
  const projects = useSelector(state => state)

  function handleClick(projectName) {
    setSelected(projectName);
    setClicked(!clicked);
  }

  function getImage (projectName) {
    switch(projectName) {
      case 'Park Hangs':
        return <div> <img className="DetailImage" src={parkhangs} alt="Park Hangs" /></div>;
      case 'Personal Website':
        return <div> <img className="DetailImage" src={website} alt="Personal Website" /></div>;
      case 'Personal Website V2':
        return <div> <img className="DetailImage" src={websiteV2} alt="Personal Website V2" /></div>;
      case 'Muscle Monsters':
        return <div> <img className="DetailImage" src={uxProject444} alt="Muscle Monsters" /></div>;
      case 'Meetup.com UI Revision':
        return <div> <img className="DetailImage" src={uxProjectMeetup} alt="Meetup" /></div>;
      case 'PrologPather':
        return <div> <a className="DetailLinks" href={`https://www.youtube.com/watch?v=vxXIq-59t1k&feature=youtu.be`} target="_blank" rel="noopener noreferrer">Check out the demo video!</a> </div>;
      default:
        return <div>No images for this project :(</div>;
    }
  }

  function displayDetails(projectName) {
    const selectedProject = projects.find(project => project.name === projectName) || null;
    if (selectedProject === null) {
      return(
        <div>Thanks for checking out my projects.</div>
      )
    } else {
      const hasGit = (selectedProject.github !== undefined);
      const hasExt = (selectedProject.external !== undefined);
      const hasImg = (selectedProject.image !== undefined);

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

      let image;
      if (hasImg) {
        image = getImage(selectedProject.name);
      } else {
        image = "Image coming soon."
      }

      return(
        <div className="DetailContainer" style={{cursor:'default'}}>
          <div className="Back">
            <button className="Button" onClick={() => handleClick()}>back</button>
          </div>
          <div>{selectedProject.type}</div>
          <div className="DetailName">{selectedProject.name}</div>
          <div className="DetailImage">
          {image}
          </div>
          <div className="DetailDescription">{selectedProject.details}</div>
          <div>
            <span className="DetailLinks">{gitLink}</span>
            <span className="DetailLinks">{externalLink}</span>
          </div>
          <div className="DetailTechContainer">
            {selectedProject.tech.map((technology, i) => (
              <div key={selectedProject.name + technology} className="DetailTech">+{technology} </div>
            ))}
          </div>
        </div>
      )
    }
  }

  function getClassName (projectType) {
    switch(projectType) {
      case 'Front End Dev':
        return 'ProjectFrontEnd';
      case 'Full Stack Dev':
        return 'ProjectFullStack';
      case 'Algorithms':
        return 'ProjectAlgorithms';
      case 'UX Research':
        return 'ProjectUXResearch';
      case 'Database':
        return 'ProjectDatabase';
      default:
        return 'ProjectFrontEnd';
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
              <li className='ProjectElement' style={{cursor:'pointer'}} onClick={() => handleClick(project.name)}>
                <span className='ProjectYear'>{project.year}</span>
                <span>{project.name}</span>
                <span className={`${getClassName(project.type)}`}>{project.type}</span>
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
