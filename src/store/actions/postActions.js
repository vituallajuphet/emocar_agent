import {FETCH_POSTS, NEW_POSTS} from "./types";
import axios from "axios";

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>{
            dispatch({ type: FETCH_POSTS, payload: res.data })
        })
    } 
}