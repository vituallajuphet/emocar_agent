import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"

const ProCont = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    position:relative;
    img{
        width:100%;
        border-radius: 50%;
    }
`;

function Profile() {

    const [shownProfile, showProfile] = useState(false);

    const handleClick = () => {
        showProfile(!shownProfile)
    }

    const profileBelow = (
        <div className="profile_below">
            <Link to="profile">My Profile</Link>
            <Link to="logout">Logout</Link>
        </div>
    );

    return (
        <>
            <ProCont className="Profile" onClick={handleClick}>
                <img src="https://pascualbrokers.com/wp-content/uploads/2020/02/dummy-profile.jpg" alt=""/>
                {!shownProfile ? "" :profileBelow}
            </ProCont>
            
            
        </>
    )
}

export default Profile
