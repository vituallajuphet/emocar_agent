import React, {useEffect} from 'react'
import { withRouter } from "react-router-dom";
import Routes from "../../routes/index";
import {Header, Drawer} from "../../commons/";
import RightContainer from '../RightContainer/';
import Container from "../Container/"
import {connect} from "react-redux"


function Main(props) {
    
    return (props.user.is_logged && (
        <div className="splitContainer">
                <Drawer/>
                <RightContainer>
                    <Header />
                    <Container>
                         <Routes/>
                    </Container>
                </RightContainer>
        </div> 
    )) || <Routes/>
    
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps)(Main))
