import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import {pageVariants,  pageTransition, pageStyle} from "../../lib"

const Cont = styled.div`
        margin:0 auto;
        padding:1.5rem;
`;

function Container(props) {
    return (
        <>
        <motion.div
            style={pageStyle}
            initial={{opacity:0}}
            exit="out"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Cont  classname="Container">
                {props.children}
            </Cont>
        </motion.div>
            
        </>
    )
}




export default Container
