import { NEW_TEST} from "./types";
import axios from "axios";

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{
            dispatch({ type: NEW_TEST, payload: res.data })
        })
    } 
}