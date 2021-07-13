import React from 'react'

function Subtitle(props) {
    return (
        <h1 className="m-5 subtitle" id={props.id}>{props.text}.</h1>
    )
}

export default Subtitle
