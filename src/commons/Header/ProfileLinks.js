import React from 'react'
import {Link} from "react-router-dom" 

function ProfileLinks() {
    return (
        <div className="profile_below">
            <Link  to="profile"><i className="fa fa-user"></i> My Profile</Link>
            <Link to="logout"><i className="fa fa-sign-out"></i> Logout</Link>
        </div>
    )
}
export default ProfileLinks
