import React from 'react'
import { withRouter } from "react-router-dom";
import Routes from "../../routes/index";
import {Header, Drawer} from "../../commons/";
import LeftContainer from '../LeftContainer/';

function Main() {
    return (
        <>
            <LeftContainer>
                <Header />
                <Routes/>
            </LeftContainer>
            <Drawer/>
        </>
    )
}

export default withRouter(Main)
