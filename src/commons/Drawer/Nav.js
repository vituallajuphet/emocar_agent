import React from 'react'
import {pages} from "../data"
import NavLink from "./NavLink"

function Nav(props) {


    return (
        <nav className="Nav">
            <ul className="Nav__list">
                {pages.map(page => <li className="Nav__list--item"><NavLink exact={page.exact} activeClassName="active-itemLink"  to={page.path} exact>{page.name}</NavLink> </li>)}
            </ul>
            
        </nav>
    )
}

export default Nav
