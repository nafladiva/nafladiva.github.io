import React from 'react'
import Subtitle from './Subtitle';

function AboutSection() {
    return (
        <div className="mt-5 container about-container">
            <Subtitle text='about' id='aboutsect' />
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                    <p>Hello there! Let me introduce my self, my name is Nafla Diva Syafia. I am a student in Syiah Kuala University, Aceh, Indonesia and really interested on technologies, especially in Software Development.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
