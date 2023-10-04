import React from 'react'
import projects from '../../data/ProjectData'
import Button from './Button'
// import { BiLogoFlutter } from "react-icons/bi";
import { PiWarningCircleBold } from "react-icons/pi";
import googlePlay from '../../images/google-play-badge.png'

function ProjectModal(props) {
    return (
        <div>
            {projects.filter(project => project.id === props.id).map(filterData => (
                <div key={filterData.id}>
                    <div className="modal fade" id={filterData.id} tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className="px-4 py-5 modal-body container-fluid">

                                    <div className='row'>
                                        <div className="col-12 col-md-6">
                                            <img className="mb-4 project-img-modal project-img" src={props.src} alt={props.alt} />
                                        </div>
                                        <div className="col-12 col-md-5 text-start">
                                            <h5 className="mb-2 modal-title text-left"><strong>{filterData.name}</strong></h5>
                                            {/* <div className="row">
                                                <p><i>Tech stacks</i> : <BiLogoFlutter size={22} className="m-1" />, BLoC</p>
                                            </div> */}
                                            <div className="mb-2 divider"></div>
                                            <p className="mb-4 project-desc">{filterData.description}</p>

                                            {filterData.url !== '#' && filterData.url !== '-' &&
                                                <div>
                                                    {filterData.url === 'google-play' &&
                                                        <a href="/">
                                                            <img src={googlePlay} width={170} alt="google-play" />
                                                        </a>
                                                    }
                                                    {filterData.url !== 'google-play' &&
                                                        <Button text='Visit' tag='pri' to={filterData.url} />
                                                    }
                                                    <Button text='Close' tag='sec' dismiss='modal' />
                                                </div>
                                            }
                                            {
                                                filterData.url === 'google-play' &&
                                                <p className='mt-1 warning-text'><i><PiWarningCircleBold size={14} /> Sorry, the app is currently in review by Google Play</i></p>
                                            }
                                            {
                                                filterData.url === '-' &&
                                                <p className='warning-text'><i><PiWarningCircleBold size={14} /> This project's code is private</i></p>
                                            }
                                            {
                                                filterData.url === '#' &&
                                                <p className='warning-text'><i><PiWarningCircleBold size={14} /> Can't access the project</i></p>
                                            }
                                        </div>
                                    </div>
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
