import { userAPI } from "../../dal/userApi";

const LOGIN = "LOGIN";
const SET_PERSONS = "SET_PERSONS";

const actionLogin = value=> (
    {
    type: LOGIN,
    value
    }
)

const actionSetPersons = value=> (
    {
        type: SET_PERSONS,
        value
    }
)

const getPersons = ()=>{
    return dispatch=>{
        userAPI.getUsersProfiles().then(result=>{
            dispatch(actionSetPersons(result));
        })
    }
}

export {
    LOGIN,
    SET_PERSONS,
    actionLogin,
    getPersons
}