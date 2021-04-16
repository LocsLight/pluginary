import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <>
            <a className="button" href="/">{props.children}</a>
        </>
    )
}

export default Button
