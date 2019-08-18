import { friendsAPI } from "../../dal/friendsApi";

const SET_FRIENDS = "SET_FRIENDS";
const SET_LOADING_FRIENDS_LIST = "SET_LOADING_FRIENDS_LIST";

const actionSetFriends = value=> (
    {
        type: SET_FRIENDS,
        value
    }
)
const actionSetLoading = value=> (
    {
        type: SET_LOADING_FRIENDS_LIST,
        value
    }
)

const getFriends = id=> {
    return dispatch=> {
        console.log("FETCH FRIENDS LIST");
        dispatch(actionSetLoading(true));
        friendsAPI.getFriends(id).then(result=>{
            dispatch(actionSetFriends(result));
            dispatch(actionSetLoading(false));
        })
    }
}

export {
    SET_FRIENDS,
    SET_LOADING_FRIENDS_LIST,
    getFriends
}