import React from 'react'
import {pages} from "../data"
import NavLink from "./NavLink"

const navs = () => {
     return pages.map(page => {
        if(page.meta.auth){
            return (
                <li key={page.name} className="Nav__list--item"><NavLink exact={page.exact} activeClassName="active-itemLink" to={page.path} exact><i className={page.icon}></i> {page.name}</NavLink> </li>
            )
        }  
     })
}

function Nav(props) {

    return (
        <nav className="Nav">
            <ul className="Nav__list">
                {navs()}
            </ul>
        </nav>
    )
}

export default Nav
