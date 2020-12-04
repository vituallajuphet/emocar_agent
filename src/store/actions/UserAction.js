import { IS_AUTH, LOGIN_ACCOUNT} from "./types";
import {config} from "../../config";
import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const checkAuth = () => ({ type: IS_AUTH }) 

export const loginAccount = (username, password) => {
    return (dispatch) => {
        const frmdata = new FormData();

        frmdata.append("username", username);
        frmdata.append("password", password);

        axios.post(`${config.api_url}api_agent/auth_user`, frmdata).then(res =>{
            dispatch({ type: LOGIN_ACCOUNT, payload: res.data })
        })
    } 
}