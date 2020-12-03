import React from 'react'
import {Header, Content} from "../../commons/index";

function RightContainer(props) {
    return (
        <div className="rightContainer">
            {props.children}
        </div>
    )
}

export default RightContainer
