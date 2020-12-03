import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import ProfileLinks from "./ProfileLinks"
import {Spring} from 'react-spring/renderprops'

const ProCont = styled.div`
    cursor: pointer;
    position:relative;
    img{
        width:100%;
        border-radius: 50%;
        width:55px;
        height:55px;
        align-items:center;
    }
`;

function Profile() {

    const [shownProfile, showProfile] = useState(false);

    const handleClick = () => {
        showProfile(!shownProfile)
    }

    return (
        <>
            <ProCont className="profile" onClick={handleClick}>
                <div className="profile__inner">
                    <img src="https://pascualbrokers.com/wp-content/uploads/2020/02/dummy-profile.jpg" alt=""/> 
                    <i className={!shownProfile ? "fa fa-angle-down": "fa fa-angle-up" }></i>
                </div>
              { shownProfile ? (
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <div style={props}>{<ProfileLinks /> }</div>}
                </Spring>) : ""
              }
            </ProCont>
        </>
    )
}

export default Profile
