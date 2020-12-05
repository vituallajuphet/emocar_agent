import {combineReducers} from "redux"
import postReducer from "./postReducer"
import testReducer from "./testReducers"
import userReducer from "./userReducer"
import modalReducer from "./modalReducer"

export default combineReducers({
    posts: postReducer,
    test: testReducer,
    user: userReducer,
    modal: modalReducer,
})


