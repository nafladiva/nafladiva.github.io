import React from 'react'
import Subtitle from './Subtitle'
import Button from './Button'

function ContactSection() {
    return (
        <div className="mt-5 container about-container">
            <Subtitle text1='c' text2='ontact' id='contactsect'/>
            
            <div className="pt-3 text-center">
                <Button text='Github' tag='pri' />
                <Button text='Linkedin' tag='pri' />
                <Button text='Twitter' tag='pri' />
            </div>
        </div>
    )
}

export default ContactSection
