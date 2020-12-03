import React from 'react'
import {Link} from "react-router-dom"

function Logo(props) {

    return (
        <div className={props.className}>
            <Link className={props.className+`__link` } to="/">
                <img className={props.className+`__link--img`} src="https://electursys.info/wp-content/uploads/2019/09/placeholder.com-logo1.png" alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo
