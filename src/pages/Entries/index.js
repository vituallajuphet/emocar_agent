import React, {useEffect, useState} from 'react'
import {connect, useSelector} from "react-redux"
import styled from "styled-components";
import PropTypes from "prop-types"
import FormEntries from "./FormEntries";
import Container from "../../components/Container"
import {toggleEntriesModal} from "../../store/actions/modalActions";
import EntriesDatatable from "../../components/Dtable/EntriesDatatable"

const PostContent = styled.li`
    width: 100%;
    padding: 10px;
    background: #cec0c0;
    color: #fff;
    margin: 0 0 10px;

    span{ font-weight:bold; }
    p{ margin:10px 0 0; }
`;

function Entries(props) {

    let modalState = useSelector(state => state.modal.entries_modal);

    const showmodal = () => {
        props.toggleEntriesModal(true)
    }


    return (
        <Container>
            <div className="content">
                <h2>Entries</h2>
                {/* <button onClick={showmodal}> Add New</button> */}
                {/* <FormEntries /> */}

                <EntriesDatatable />
            </div>
        </Container>
    )
}

export default connect(null, {toggleEntriesModal})(Entries)
