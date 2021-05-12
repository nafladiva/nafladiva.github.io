import React from 'react'
import Subtitle from './Subtitle'
import ProjectBox from './ProjectBox'
import neumize from '../images/neumize.png'
import finnote from '../images/finnote.png'

function ProjectSection() {
    return (
        <div className="mt-5 container about-container">
            <Subtitle text1='p' text2='rojects' id='projectsect'/>
            
            <div className="row">
                <ProjectBox name='Neumize' image={neumize} />
                <ProjectBox name='Finnote' image={finnote} />
                <ProjectBox name='Neumize' image={neumize} />
            </div>
        </div>
    )
}

export default ProjectSection
