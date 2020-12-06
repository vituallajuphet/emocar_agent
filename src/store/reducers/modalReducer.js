import {TOGGLE_ENTRIES_MODAL, PRELOADER_TOGGLE} from "../actions/types";

const initialState = {
    entries_modal : false,
    loading : true
}

const modalReducer = (state = initialState, action) =>{

    switch (action.type) {
        case TOGGLE_ENTRIES_MODAL:
            return {
                ...state,
                entries_modal: action.payload
            }
        case PRELOADER_TOGGLE:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default modalReducer;