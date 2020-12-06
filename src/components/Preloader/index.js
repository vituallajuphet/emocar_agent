import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"

function  Preloader(props) {

    return props.is_loading && (
        <div className="Preloader">
            <div className="Preloader__content">
                <img src="/images/loading.gif" alt="loading"/>
                <h2 class="Preloader__content--heading">Please Wait...</h2>
            </div>
        </div> 
    ) || <></>
}

const mapStateToProps = state => ({
    is_loading: state.modal.loading
})

export default connect(mapStateToProps)(Preloader) 
