import {TOGGLE_ENTRIES_MODAL, PRELOADER_TOGGLE} from "../actions/types";

export const toggleEntriesModal = (modalState) => ({ type: TOGGLE_ENTRIES_MODAL, payload: modalState }) 

export const togglepreloader = (loading) => ({ type: PRELOADER_TOGGLE, payload: loading }) 


// export const loginAccount = (username, password) => {
//     return (dispatch) => {
//         const frmdata = new FormData();

//         frmdata.append("username", username);
//         frmdata.append("password", password);

//         axios.post(`${config.api_url}api_agent/auth_user/`, frmdata).then(res =>{
//             dispatch({ type: LOGIN_ACCOUNT, payload: res.data })
//         })
//     } 
// }