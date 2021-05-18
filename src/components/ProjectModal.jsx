import React from 'react'
import projects from '../data/ProjectData'
import Button from './Button'

function ProjectModal(props) {
    return (
        <div>
            {projects.filter(project => project.id === props.id).map(filterData => (
                <div key={filterData.id}>
                    <div className="modal fade" id={filterData.id} tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="p-3 modal-content">
                            <div className="p-4 modal-body">
                                <h4 className="mb-4 modal-title text-left"><strong>{filterData.name}</strong></h4>
                                <img className="mb-4 project-img-modal" src={props.src} alt={props.alt} />
                                <p className="mb-4">{filterData.description}</p>
                                <Button text='Visit' tag='pri' to={filterData.url} />
                                <Button text='Close' tag='sec' dismiss='modal' />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectModal
