import React from 'react'
import './Information.css'
import Typical from 'react-typical'
import { useDispatch } from "react-redux"
// import resume from '../images/philippe_chapdelaine_resume_2021.pdf'

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
            <div className='InformationText'>
                <a className='a' href="mailto:pchapy@gmail.com" target="_blank">
                pchapy@gmail.com
                </a>
            </div>
            <div className='InformationText'>Vancouver, BC</div>
            <div className='InformationText'><span>Github </span><span>LinkedIn </span><span>Resume</span></div>
            <div className='InformationTextFilter'>You can filter my projects by type:</div>
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
                    className='Algorithms'
                    onMouseOver={() => handleHover('Algorithms')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    Algorithms - </span>
                <span 
                    className='UXResearch'
                    onMouseOver={() => handleHover('UX Research')} 
                    onMouseLeave={() => handleUnHover()}
                    >
                    UX Research</span>
            </div>
            <div>
                <div className='Experience'>Experience</div>
                <div><span className='ExperienceYear'>2019-2020</span>Statistics Canada</div>
                <div><span className='ExperienceYear'>2016-2022</span>University of British Columbia</div>
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
