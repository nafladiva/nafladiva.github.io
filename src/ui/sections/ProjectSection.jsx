import React, { useState } from 'react'
import ProjectBox from '../components/ProjectBox'
import projects from '../../data/ProjectData'
import podipu from '../../images/projects/podipu.png';
import stockwell from '../../images/projects/stockwell.png';
import simata from '../../images/projects/simata.png'
import todo from '../../images/projects/todo.png'
import ditonton from '../../images/projects/ditonton.png'
import finnote from '../../images/finnote.png'
import kuoto from '../../images/kuoto.png'
import restail from '../../images/restail.png'

const projectImages = {
    podipu,
    stockwell,
    simata,
    todo,
    ditonton,
    finnote,
    kuoto,
    restail
}

const mockUpProjects = {
    finnote,
    kuoto,
    restail
}

function ProjectSection() {
    const [activeTab, setActiveTab] = useState('All')

    const categories = ['All', 'Flutter', 'React', 'Python']

    const filteredProjects = activeTab === 'All'
        ? projects.filter(project => projectImages[project.id])
        : projects.filter(project => project.category === activeTab && projectImages[project.id])

    return (
        <div className="mt-5 col-12 col-md-8 container about-container" id='projectsect'>
            <h4 className='text-center'><b>Projects</b></h4>

            {/* Tab Navigation */}
            <div className="d-flex justify-content-center mb-4">
                <div className="btn-group" role="group">
                    {categories.map(category => (
                        <button
                            key={category}
                            type="button"
                            className={`btn ${activeTab === category ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className='row'>
                {filteredProjects.map(project => (
                    <ProjectBox
                        key={project.id}
                        name={project.name}
                        image={projectImages[project.id]}
                        id={project.id}
                        bgColor={project.id === 'ditonton' ? 'FFD89C' : (project.category === 'Flutter' ? 'ADC4CE' : '7EAA92')}
                        isMockup={!(project.id in mockUpProjects)}
                        url={project.url}
                    />
                ))}
            </div>

            <div className="text-center">
                {activeTab === 'All' && (
                    <p className="mt-5 text-center">more project still on going...</p>
                )}
                {/* <Button text='See more' tag='sec' to='' /> */}
            </div>
        </div>
    )
}

export default ProjectSection
