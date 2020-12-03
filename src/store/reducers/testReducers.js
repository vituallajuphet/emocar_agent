import {NEW_TEST} from "../actions/types";

const initialState = {
    users:[],

}

const testReducer = (state = initialState, action) =>{

    switch (action.type) {
        case NEW_TEST:
            return {
                ...state,
                users:action.payload
            }
    
        default:
            return state;
    }

}

export default testReducer;