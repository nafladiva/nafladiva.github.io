import React from 'react'
import Subtitle from './Subtitle'
import ProjectBox from './ProjectBox'
import neumize from '../images/neumize.png'
import finnote from '../images/finnote.png'
import kuoto from '../images/kuoto.png'

function ProjectSection() {
    return (
        <div className="mt-5 container about-container">
            <Subtitle text1='p' text2='rojects' id='projectsect'/>
            
            <div className="row">
                <ProjectBox name='Neumize' image={neumize} url='http://www.neumize.com/' id='neumize' />
                <ProjectBox name='Finnote' image={finnote} url='http://47.254.194.52/' id='finnote' />
                <ProjectBox name='Kuoto' image={kuoto} id='kuoto' />
            </div>

            <p className="mt-5 text-center">more project still on going...</p>
        </div>
    )
}

export default ProjectSection
