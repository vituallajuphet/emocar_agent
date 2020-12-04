import {combineReducers} from "redux"
import postReducer from "./postReducer"
import testReducer from "./testReducers"
import userReducer from "./userReducer"

export default combineReducers({
    posts: postReducer,
    test: testReducer,
    user: userReducer
})


