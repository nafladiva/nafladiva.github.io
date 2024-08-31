import React from 'react'
import photo from '../../images/profile.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeadSection() {
    return (
        <div className="mt-5 mt-sm-1 mt-md-3 container">
            <div className="row d-flex align-items-center">
                <div className="mt-5 mt-md-0 pe-4 col-12 col-md-6 text-center text-sm-center text-lg-end">
                    <img src={photo} width={250} alt="Nafla" />
                </div>
                <div className="p-4 p-md-0 col-12 col-md-3 col-lg-3">
                    <h1><b>Hello! <span className="emoji">👋🏻</span></b></h1>
                    <p className="headtitle1">I’m <b>Nafla</b>, a passionate Flutter Mobile Developer, based in Indonesia</p>
                    <a href="https://github.com/nafladiva"><FaGithub size={24} color='#000' className="m-2" /></a>
                    <a href="https://www.linkedin.com/in/nafla-diva-syafia/"><FaLinkedin size={24} color='#000' className="m-2" /></a>
                </div>
            </div>
        </div>
    )
}

export default HeadSection
