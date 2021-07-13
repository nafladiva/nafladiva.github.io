import React from 'react'
import Subtitle from './Subtitle'
import Button from './Button'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactSection() {
    return (
        <div className="mt-5 mb-5 container about-container">
            <Subtitle text='contact' id='contactsect' />

            <div className="m-3 p-3 text-center card contact-card">
                <div className="card-body">
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Aceh, Indonesia</h5><br />
                    <h5><FontAwesomeIcon icon={faPhoneAlt} /> +6281219500968</h5><br />
                    <h5><FontAwesomeIcon icon={faEnvelope} /> nafladiva@gmail.com</h5><br />

                    <Button text='Github' tag='pri' to='https://github.com/nafladiva' />
                    <Button text='Linkedin' tag='pri' to='https://www.linkedin.com/in/nafla-diva-syafia/' />
                </div>
            </div>
        </div>
    )
}

export default ContactSection
