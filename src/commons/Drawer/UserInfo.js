import React from 'react'
import {curmonth, dayDate, fullYear, fullDate} from "../../dateLib";

function UserInfo(props) {

    const {userinfo} = props;

    return (
        <>
            <div className="UserInfo">
                <div className="frmgroup">
                    <label>Date:</label>
                   <div className="frmValue">{fullDate}</div>
                </div>

                <div className="frmgroup">
                    <label>User/Agent:</label>
                   <div className="frmValue">{`${userinfo.first_name} ${userinfo.last_name}`}</div> 
                </div>
                <div className="frmgroup">
                    <label>Branch:</label>
                   <div className="frmValue">{userinfo.branch_name}</div> 
                </div>
                <div className="frmgroup">
                    <label>Location:</label>
                   <div className="frmValue">{userinfo.location_name}</div> 
                </div>
            </div>
        </>
    )
}

export default UserInfo
