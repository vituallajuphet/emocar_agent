import React, {useEffect, useState} from 'react'
import Modal from "../../components/Modal"
import {connect} from "react-redux"
import {toggleEntriesModal} from "../../store/actions/modalActions"


function FormEntries(props) {
    return (
        <div>
            <Modal 
                setWidth="900" 
                title="New Entries"
            >
                test2
                <div className="btn_container">
                    <button className="button btn-primary" type="submit"><i className="fa fa-check"></i> Submit</button>
                    <button onClick={()=> {props.toggleEntriesModal(false)}} className="button btn-danger" type="button"><i className="fa fa-times"></i> Close</button>
                </div>
            </Modal>
        
        </div>
    )
}



export default connect(null, {toggleEntriesModal})(FormEntries)
