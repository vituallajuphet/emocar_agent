import { 
    IS_AUTH, 
    LOGIN_ACCOUNT, 
    CHECK_AUTH, 
    PRELOADER_TOGGLE, 
    LOGOUT_ACCOUNT
} from "./types";
import {config} from "../../config";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const checkAuth = () => {

    return (dispatch) => {
        const token = localStorage.getItem("token");
        const stat = { status: "error", message: "Something wring", data: [], }

        if(token != undefined && token != ""){
            const frmdata = new FormData();

            frmdata.append("token", token);

            dispatch({ type: PRELOADER_TOGGLE, payload: true }) 

            axios.post(`${config.api_url}api_agent/verify_token/`, frmdata).then(res =>{
                dispatch({ type: CHECK_AUTH, payload: res.data })              
                dispatch({ type: PRELOADER_TOGGLE, payload: false })              
            }).catch(err => {
                dispatch({ type: CHECK_AUTH, payload: stat })
                dispatch({ type: PRELOADER_TOGGLE, payload: false })     
            } )

        }else{
            dispatch({ type: CHECK_AUTH, payload: stat })
            dispatch({ type: PRELOADER_TOGGLE, payload: false })     
        }
    }  

}

export const loginAccount = (username, password) => {
    return (dispatch) => {
        const frmdata = new FormData();

        frmdata.append("username", username);
        frmdata.append("password", password);

        dispatch({ type: PRELOADER_TOGGLE, payload: true }) 

        axios.post(`${config.api_url}api_agent/auth_user/`, frmdata).then(res =>{

            if(res.data.status == "success"){
                localStorage.setItem("token", res.data.data.token_value)
            }

            dispatch({ type: LOGIN_ACCOUNT, payload: res.data })
            dispatch({ type: PRELOADER_TOGGLE, payload: false }) 
            
        }).catch(err => dispatch({ type: PRELOADER_TOGGLE, payload: false }) )
    } 
}

export const logoutAccount = () => {
    return (dispatch) => {
        const frmdata = new FormData();

        const token = localStorage.getItem("token");
        frmdata.append("token", token);
        dispatch({ type: PRELOADER_TOGGLE, payload: true }) 

        axios.post(`${config.api_url}api_agent/logout/`, frmdata).then(res =>{

            if(res.data.status == "success"){
                localStorage.setItem("token", res.data.data.token_value)
            }
            dispatch({ type: LOGOUT_ACCOUNT, payload: res.data })
            dispatch({ type: PRELOADER_TOGGLE, payload: false }) 
        }).catch(err => {
            dispatch({ type: PRELOADER_TOGGLE, payload: false }) 
        })
    } 
}