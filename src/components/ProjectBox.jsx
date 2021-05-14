import React from 'react'

function ProjectBox(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 text-center">
            <a href={props.url}><img className="project-img" src={props.image} alt={props.name} /></a>
            <h5 className="mt-3 mb-5">{props.name}</h5>
        </div>
    )
}

export default ProjectBox
