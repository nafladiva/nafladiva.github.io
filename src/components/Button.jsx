import React from 'react'

function Button(props) {
    return (
        <a href={props.to} className={`m-2 btn btn-${props.tag}`} data-bs-dismiss={props.dismiss}>{props.text}</a>  
    )
}

export default Button
