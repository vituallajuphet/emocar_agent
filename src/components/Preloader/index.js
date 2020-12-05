import React, {useState, useEffect} from 'react'
import {connect, useSelector} from "react-redux"

function  Preloader(props) {

    return (
        <div className="Preloader">
            <div className="Preloader__content">
                <h2 class="Preloader__content--heading">Please Wait...</h2>
            </div>
        </div>
    );
}

export default Preloader 
