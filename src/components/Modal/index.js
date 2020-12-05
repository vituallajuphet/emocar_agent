import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {connect, useSelector} from "react-redux"
import {toggleEntriesModal} from "../../store/actions/modalActions"

function  Modal(props) {

    const  { setWidth, title } = props;

    const ModHeader = styled.div`
        max-width: ${setWidth}px;
    `;

    let modalState = useSelector(state => state.modal.entries_modal);

    const closeModal = () => {
        props.toggleEntriesModal(false)
    }

    return modalState && (
        <div className="Modal">
            <ModHeader className="Modal__dialog">
                <div className="Modal__dialog--header">
                <h2 className="heading">{title}</h2>
                <button onClick={closeModal} type="button" className="btn"><i className="fa fa-times"></i></button>
                </div>
                <div className="Modal__dialog--body">
                    {props.children}
                </div>

            </ModHeader>
        </div>
    );

}

export default connect(null, {toggleEntriesModal})(Modal)
