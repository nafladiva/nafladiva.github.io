import React from 'react'
import Subtitle from './Subtitle'
import ProjectBox from './ProjectBox'
import neumize from '../images/neumize.png'
import finnote from '../images/finnote.png'
import kuoto from '../images/kuoto.png'
import muvila from '../images/muvila.png'
import airbud from '../images/airbud.png'
import cocheck from '../images/cocheck.png'
import restail from '../images/restail.png'

function ProjectSection() {
    return (
        <div className="mt-5 container about-container">
            <Subtitle text='projects' id='projectsect' />

            <div className="row">
                <ProjectBox name='Neumize' image={neumize} url='http://www.neumize.com/' id='neumize' />
                <ProjectBox name='Finnote' image={finnote} url='http://47.254.194.52/' id='finnote' />
                <ProjectBox name='Kuoto' image={kuoto} id='kuoto' />
                <ProjectBox name='Muvila' image={muvila} url='https://github.com/nafladiva/movielist-flutter' id='muvila' />
                <ProjectBox name='Airbud' image={airbud} url='https://github.com/nafladiva/Airbud' id='airbud' />
                <ProjectBox name='Co-Check' image={cocheck} url='https://github.com/nafladiva/co-check' id='cocheck' />
                <ProjectBox name='Restail' image={restail} url='https://github.com/nafladiva/restaurant-app-flutter' id='restail' />
            </div>

            <div className="text-center">
                <p className="mt-5 text-center">more project still on going...</p>
                {/* <Button text='See more' tag='sec' to='' /> */}
            </div>
        </div>
    )
}

export default ProjectSection
