import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchUsers}  from "../../store/actions/testActions"
import Container from "../../components/Container"

function NewEntries(props) {

    useEffect( () => {
;
    }, [])

    return (
        <Container>
            <div className="content">
                <h2>New Entries</h2>

            </div>
        </Container>
    )
}

const mapStateToProps  = (state) => ({
    users: state.test.users
}) 

export default connect(mapStateToProps, {fetchUsers})(NewEntries)
