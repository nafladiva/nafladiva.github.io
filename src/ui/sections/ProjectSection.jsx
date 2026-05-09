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
            <div className="d-flex justify-content-center gap-2 mt-3 mb-4 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        type="button"
                        style={{
                            padding: '8px 16px',
                            borderRadius: '25px',
                            border: 'none',
                            backgroundColor: activeTab === category ? '#444444' : '#f1f1f1',
                            color: activeTab === category ? '#FFFFFF' : '#666666',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            boxShadow: activeTab === category ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                        }}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
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
