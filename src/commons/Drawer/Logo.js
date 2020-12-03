import React from 'react'
import {Link} from "react-router-dom"

function Logo(props) {

    return (
        <div className={props.className}>
            <Link className={props.className+`__link` } to="/">
                <img className={props.className+`__link--img`} src="/images/comp_logo.png" alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo
