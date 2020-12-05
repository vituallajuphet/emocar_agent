import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Logo from "./Logo";

import {connect} from "react-redux";
import UserInfo from "./UserInfo"

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight 
    || document.body.clientHeight;

function Drawer(props) {

    let [wHeight, setHeight] = useState(getHeight());

    const drawerStyle = { height: wHeight };
    const userinfo  = props.userinfo.user;

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => setHeight(getHeight()), 150);
        };

        window.addEventListener('resize', resizeListener);
    
        return () => {
          window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return (
        <div className="leftContainer" style={drawerStyle} >
            <Logo  className="Logo"/>
            <Nav />
            <UserInfo userinfo={userinfo}/>
        </div>
    );
}

const mapStateToProps = (state)=>({
    userinfo: state.user
})

export default connect(mapStateToProps)(Drawer)
