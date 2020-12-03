import React, { useState } from 'react'
import pages from "../data";
import Profile from "./Profile"

function Header() {

    return (
        <header className="header">
            <div className="header__container">
            
                <Profile />
            </div>
        </header>
    )
}

export default Header
