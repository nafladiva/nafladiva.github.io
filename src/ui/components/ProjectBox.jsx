import React from 'react'
import ProjectModal from './ProjectModal'

function ProjectBox(props) {
    return (
        <div className="col-12 col-lg-4 col-md-6 p-0 text-center">
            <div className="card project-card">
                <div className="card-body">
                    <a href='/' data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
                        <div className='d-flex project-img-box' style={{ backgroundColor: `#EFEFEF` }}>
                            <img className={props.isMockup ? 'p-3 project-img' : 'project-img-logo'} src={props.image} alt={props.name} />
                            {props.isMockup && <p className='project-title align-self-center'>{props.name}</p>}
                        </div>
                    </a>

                    <ProjectModal id={props.id} src={props.image} alt={props.name} />
                    {/* <h6 className="mt-3 font-semibold">{props.name}</h6> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
