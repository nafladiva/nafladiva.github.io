import React from 'react'
import Button from '../components/Button';
import cv from '../../document/CV_Nafla Diva Syafia.pdf'

function AboutSection() {
    return (
        <div className="mt-5 container about-container" id='aboutsect'>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                    <h5><b>About me</b></h5>
                    <p>A passionate Mobile Developer (Flutter) with various work experiences and IT certifications. Willing to keep learning about new things, possess strong communication and teamwork skills.</p>
                    <Button text='My Recent CV' tag='pri' to={cv}></Button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
