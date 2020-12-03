import React from 'react'
import { withRouter } from "react-router-dom";
import Routes from "../../routes/index";
import {Header, Drawer} from "../../commons/";
import RightContainer from '../RightContainer/';
import Container from "../Container/"

function Main() {
    return (
        <div className="splitContainer">
            <Drawer/>
            <RightContainer>
                <Header />
                <Container>
                     <Routes/>
                </Container>
            </RightContainer>
        </div>
    )
}

export default withRouter(Main)
