import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Logo from "./Logo";

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight 
    || document.body.clientHeight;

function Drawer() {

    let [wHeight, setHeight] = useState(getHeight());

    const drawerStyle = { height: wHeight, };

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
        </div>
    );
}


export default Drawer
