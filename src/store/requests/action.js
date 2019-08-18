import {requestsAPI} from "../../dal/requestsApi";

const SET_REQUESTS = "SET_REQUESTS";

const actionSetRequests = value=> (
    {
        type: SET_REQUESTS,
        value
    }
)

const getRequests = id => {
    return dispatch=> {
        requestsAPI.getRequests(id).then(result=>{
            dispatch(actionSetRequests(result))
        })
    }
}

export {
    SET_REQUESTS,
    getRequests
}