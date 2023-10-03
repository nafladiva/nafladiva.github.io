import React from 'react'
import ProjectModal from './ProjectModal'

function ProjectBox(props) {
    return (
        <div className="col-12 col-lg-4 col-md-6 text-center">
            <div className="p-1 card project-card">
                <div className="card-body">
                    <a href='/' data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
                        <img className="project-img" width={240} src={props.image} alt={props.name} />
                    </a>
                    <ProjectModal id={props.id} src={props.image} alt={props.name} />
                    <h6 className="mt-3">{props.name}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
