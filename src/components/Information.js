import React from 'react'
import './Information.css'
import Typical from 'react-typical'
import { useDispatch } from "react-redux"
import resume from '../images/philippe_chapdelaine_resume_2021.pdf'

function Information() {

    const dispatch = useDispatch();

    function handleHover(skillUsed) {
        dispatch({ type: "FILTER_PROJECTS", skillUsed: skillUsed });
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
            <div className='InformationLink'> <a className='a' rel="noreferrer" href="https://github.com/philchapdelaine/" target="_blank">Github</a></div>
            <div className='InformationLink'> <a className='a' rel="noreferrer" href="https://www.linkedin.com/in/philippe-chapdelaine-b63561185/" target="_blank">LinkedIn</a></div>
            <div className='InformationTextFilter'>You can filter my projects by type or tech:</div>
            <div className='Skills'>
                <span 
                    className='FrontEnd' 
                    onMouseOver={() => handleHover('Front End Dev')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Front End Dev - </span>
                <span 
                    className='FullStack'
                    onMouseOver={() => handleHover('Full Stack Dev')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Full Stack Dev - </span>
                <span 
                    className='UXResearch'
                    onMouseOver={() => handleHover('UX Research')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    UX Research - </span>
                <span 
                    className='Algorithms'
                    onMouseOver={() => handleHover('Algorithms')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Algorithms - </span>
                <span 
                    className='Database'
                    onMouseOver={() => handleHover('Database')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Database</span>
            </div>
            <div className='Tech'>
                <span 
                    className='FullStack'
                    onMouseOver={() => handleHover('React')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    React.JS - </span>
                <span 
                    className='Algorithms'
                    onMouseOver={() => handleHover('Node')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Node.JS - </span>
                <span 
                    className='Database'
                    onMouseOver={() => handleHover('Javascript')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Javascript - </span>
                <span 
                    className='UXResearch'
                    onMouseOver={() => handleHover('Redux')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Redux - </span>
                <span 
                    className='FrontEnd'
                    onMouseOver={() => handleHover('HTMLCSS')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    HTML/CSS - </span>
                <span 
                    className='Algorithms'
                    onMouseOver={() => handleHover('Java')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Java - </span>
                <span 
                    className='Database'
                    onMouseOver={() => handleHover('Java')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Typescript - </span>
                <span 
                    className='FrontEnd'
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
