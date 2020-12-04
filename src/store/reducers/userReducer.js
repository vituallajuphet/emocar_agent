import {IS_AUTH, LOGIN_ACCOUNT} from "../actions/types";

const initialState = {
    user:{},
    is_logged: false
}

const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case IS_AUTH:
            const newLogged = state.is_logged;
            return {
                ...state,
                is_logged:newLogged
            }
        case LOGIN_ACCOUNT:
            const  {data, status, message} = action.payload;
            if(status == "success"){
                return {
                    ...state,
                    is_logged: true
                }
            }else{
                return state;
            }

        default:
            return state;
    }
}

export default userReducer;