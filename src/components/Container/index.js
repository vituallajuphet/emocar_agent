import React from 'react'
import styled from "styled-components";

const Cont = styled.div`
        margin:0 auto;
        padding:1.5rem;
`;

function Container(props) {
    return (
        <>
            <Cont  classname="Container">
                {props.children}
            </Cont>
        </>
    )
}




export default Container
