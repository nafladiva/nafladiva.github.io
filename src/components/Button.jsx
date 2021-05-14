import React from 'react'

function Button(props) {
    return (
        <a href={props.to} className={`m-2 btn btn-${props.tag}`}>{props.text}</a>  
    )
}

export default Button
