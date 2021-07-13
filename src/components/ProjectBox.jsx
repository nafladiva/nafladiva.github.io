import React from 'react'
import ProjectModal from './ProjectModal'

function ProjectBox(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 text-center">
            <div className="p-1 card project-card">
                <div className="card-body">
                    <a href='/' data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
                        <img className="project-img" src={props.image} alt={props.name} />
                    </a>
                    <ProjectModal id={props.id} src={props.image} alt={props.name} />
                    <h5 className="mt-3">{props.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
