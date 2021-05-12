import React from 'react'

function Subtitle(props) {
    return (
        <h1 className="m-5 text-center" id={props.id}><span className="bg-square">{props.text1}</span>{props.text2}.</h1>
    )
}

export default Subtitle
