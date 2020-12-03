import {combineReducers} from "redux"
import postReducer from "./postReducer"
import testReducer from "./testReducers"

export default combineReducers({
    posts: postReducer,
    test: testReducer,
})


