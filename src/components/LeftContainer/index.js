import React from 'react'
import {Header, Content} from "../../commons/index";

function LeftContainer(props) {
    return (
        <div className="leftContainer">
            {props.children}
        </div>
    )
}

export default LeftContainer
