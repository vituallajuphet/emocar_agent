import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUsers}  from "../../store/actions/testActions"


function NewEntries(props) {

    useEffect( () => {
        props.fetchUsers();
    }, [])

    return (
        <div>
            <ul>
                 {props.users.map(usr => (<li key={usr.id}>{usr.name}</li>))}
            </ul>
        </div>
    )
}

const mapStateToProps  = (state) => ({
    users: state.test.users
}) 

export default connect(mapStateToProps, {fetchUsers})(NewEntries)
