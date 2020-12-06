import React from 'react'
import {Link, withRouter} from "react-router-dom" 
import {connect} from "react-redux";
import {logoutAccount} from "../../store/actions/UserAction";

function ProfileLinks(props) {

    const logoutAcc = () => {
        props.logoutAccount()

    }

    return (
        <div className="profile_below">
            <Link  to="profile"><i className="fa fa-user"></i> My Profile</Link>
            <a onClick={() => logoutAcc() } href="javascript:;"><i className="fa fa-sign-out"></i> Logout</a>
        </div>
    )
}
export default withRouter(connect(null, {logoutAccount})(ProfileLinks))
