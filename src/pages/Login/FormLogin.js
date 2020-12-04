
import React, {useEffect, useState } from 'react'
import {connect} from "react-redux" 
import {loginAccount} from "../../store/actions/UserAction"
import {withRouter} from "react-router-dom"

function FormLogin(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [showErr, setError] = useState(false)

    const handleChangeUser = (e) => setUsername(e.target.value);
    const handleChangePass = (e) => setPassword(e.target.value);

    const handleSubmit     = (e) => {
        e.preventDefault();

        props.loginAccount(username, password)

        if(props.user.is_logged){
            props.history.push('/entry-details');
        }else{
            setError(true)
        }
    }

    return (
        <div className="Login__cont">
            <img src="/images/comp_logo.png" alt=""/>
            <form action="#" onSubmit= {handleSubmit} method="post" className="Login__cont--form">
                <input type="text" value={username} onChange={handleChangeUser } placeholder="Enter Username"/>
                <input value={password} type="password" onChange={handleChangePass }  placeholder="Enter Password"/>
                <button type="submit">Login</button>
            </form>
            {showErr ? (<p className="msgErr">Incorrect User/Password</p>) : ""}
        </div>
        
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     loginAccount: 
// })
const mapStateToProps = (state) => ({
    user: state.user
}) 

export default withRouter(connect(mapStateToProps, {loginAccount})(FormLogin))
