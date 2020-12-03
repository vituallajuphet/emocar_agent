import React from 'react'
import {NavLink} from "react-router-dom";

function NvLink(props) {

    return (
        <NavLink className={props.className} {...props}>
            {props.children}
        </NavLink>
    )
}

export default NvLink
