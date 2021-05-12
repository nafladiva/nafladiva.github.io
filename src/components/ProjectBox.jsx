import React from 'react'

function ProjectBox(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 text-center">
            <img className="project-img" src={props.image} alt={props.name} />
            <h5 className="mt-3 mb-5">{props.name}</h5>
        </div>
    )
}

export default ProjectBox
