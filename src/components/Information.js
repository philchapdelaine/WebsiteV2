import React from 'react'
import './Information.css'
import Typical from 'react-typical'
// import resume from '../images/philippe_chapdelaine_resume_2021.pdf'

function Information() {
    
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
        <div className='InformationText'>pchapy@gmail.com</div>
        <div className='InformationText'>Vancouver, BC</div>
        <div className='InformationText'>604-356-1821</div>
        <div className='InformationText'>Filter projects by type:</div>
        <div className='InformationText'>
            <span className='FrontEnd'>Front End Dev - </span>
            <span className='FullStack'>Full Stack Dev - </span>
            <span className='Algorithms'>Algorithms - </span>
            <span className='UXResearch'>UX Research</span>
        </div>
        <div className='InformationText'>
            <p>
                I'm Phil, a software developer, student, and occasional soccer player based in Vancouver.
                Currently, I'm finshing a computer science degree at UBC. I'm seeking exciting opportunities in 2022.
                Here are some of my projects.
            </p>
        </div>
      </div>
  )
}

export default Information
