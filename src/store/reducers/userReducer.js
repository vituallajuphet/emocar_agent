import {IS_AUTH, LOGIN_ACCOUNT, CHECK_AUTH} from "../actions/types";

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
            var  {data, status, message} = action.payload;

            if(status == "success"){
                return {
                    ...state,
                    is_logged: true,
                    user: data
                }
            }else{
                return state;
            }
        case CHECK_AUTH:
            var  {data, status, message} = action.payload;

            if(status == "success"){
                return {
                    ...state,
                    is_logged: true,
                }
            }else{
                return {
                    ...state,
                    is_logged: false,
                }
            }

        default:
            return state;
    }
}

export default userReducer;