import React from 'react'
import './Information.css'
import Typical from 'react-typical'
import { useDispatch } from "react-redux"
import resume from '../images/philippe_chapdelaine_resume_2021.pdf'

function Information() {

    const dispatch = useDispatch();

    function handleHover(projectType) {
        dispatch({ type: "FILTER_PROJECTS", projectType: projectType });
        // window.scrollTo(0,document.body.scrollHeight);
    }

    function handleUnHover() {
        dispatch({ type: "ALL_PROJECTS" });
    }
    
    return (
        <div className='InformationContainer'>
            <div className='InformationName'>Philippe Chapdelaine</div>
            <div className='InformationText'>
                <Typical
                    steps={[
                        '', 
                        1000, 
                        'Front End Developer.',
                        2000,
                        'Full Stack Developer.',
                        2000,
                        'Kind of a nerd.',
                        2000
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div className='InformationText'>Check out my <a className='InformationResume' href={resume} target="_blank" rel="noopener noreferrer">resume</a>.</div>
            <div className='InformationText'>
                <a className='a' href="mailto:pchapy@gmail.com" target="_blank">
                pchapy@gmail.com
                </a>
            </div>
            <div className='InformationText'>Vancouver, BC</div>
            <div className='InformationText'> <a className='a' rel="noreferrer" href="https://github.com/philchapdelaine/" target="_blank">Github</a></div>
            <div className='InformationText'> <a className='a' rel="noreferrer" href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">LinkedIn</a></div>
            <div className='InformationTextFilter'>You can filter my projects by type or tech:</div>
            <div className='Skills'>
                <span 
                    className='FrontEnd' 
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Front End Dev')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Front End Dev</span>
                <span> - </span>
                <span 
                    className='FullStack'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Full Stack Dev')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Full Stack Dev</span>
                <span> - </span>
                <span 
                    className='UXResearch'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('UX Research')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    UX Research</span>
                <span> - </span>
                <span 
                    className='Algorithms'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Algorithms')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Algorithms</span>
                <span> - </span>
                <span 
                    className='Database'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Database')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Database</span>
            </div>
            <div className='Tech'>
                <span 
                    className='FullStack'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('React.JS')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    React.JS</span>
                <span> - </span>
                <span 
                    className='Algorithms'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Node.JS')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Node.JS</span>
                <span> - </span>
                <span 
                    className='Database'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Javascript')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Javascript</span>
                <span> - </span>
                <span 
                    className='UXResearch'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Redux')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Redux</span>
                <span> - </span>
                <span 
                    className='FrontEnd'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('HTML/CSS')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    HTML/CSS</span>
                <span> - </span>
                <span 
                    className='Algorithms'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Java')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Java</span>
                <span> - </span>
                <span 
                    className='Database'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('Typescript')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Typescript</span>
                <span> - </span>
                <span 
                    className='FrontEnd'
                    style={{cursor:'pointer'}}
                    onMouseOver={() => handleHover('SQL')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    SQL</span>
            </div>
            <div>
                <div className='Experience'>Experience</div>
                <div><span className='ExperienceYear'>2019-20</span>Statistics Canada</div>
                <div><span className='ExperienceYear'>2016-22</span>University of British Columbia</div>
            </div>
            <div className='InformationText'>
                <p> I'm Phil, a software developer, student, and occasional soccer player based in Vancouver.
                    I'm seeking exciting opportunities in 2022. Here are some of my projects.
                </p>
            </div>
        </div>
    )
}

export default Information
