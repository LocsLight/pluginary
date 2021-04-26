import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <>
        <nav className="button">
            <a className="btn-link" href="/">{props.children}</a>
        </nav>
        </>
    )
}

export default Button
