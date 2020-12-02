import React from 'react'
import styled from "styled-components";

const splitContainer = styled.div`
	display:flex;
	justify-content:space-between;
`;

function SplitContainer(props) {

	
    const {Drawer, HeadContainer} = props;

    return (
		<splitContainer className="SplitContainer">
			<div className="SplitContainer__left">
				<Drawer />
			</div>
			<div className="SplitContainer__right">
				<HeadContainer />
			</div>
		</splitContainer>
    )
}

export default SplitContainer
