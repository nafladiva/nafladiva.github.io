import React from 'react'

function Button(props) {
    return (
        <a href={props.to} className={`me-3 btn btn-${props.tag}`} data-bs-dismiss={props.dismiss}>{props.text}</a>
    )
}

export default Button
