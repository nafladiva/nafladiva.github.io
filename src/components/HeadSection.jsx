import React from 'react'
import photo from '../images/nafla.png';
import Button from './Button';
import cv from '../document/CV_Nafla Diva Syafia.pdf'

function HeadSection() {
    return (
        <div className="mt-5 mt-md-3 container">
            <div className="row d-flex align-items-center">
                <div className="p-4 p-md-0 col-12 col-md-6">
                    <h4>Hi there,</h4>
                    <h1 className="headtitle1">My name is <span><strong>Nafla</strong></span>! <span className="emoji">&#128075;</span></h1>
                    <Button text='Download CV' tag='pri' to={cv} />
                    <Button text='Contact' tag='sec' to='#contactsect' />
                </div>
                <div className="mt-5 mt-md-0 col-12 col-md-6 text-center">
                    <img src={photo} alt="Nafla" />
                </div>
            </div>
        </div>
    )
}

export default HeadSection
