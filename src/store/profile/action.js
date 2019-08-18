import { userAPI } from "../../dal/userApi";

const SET_PROFILE = "SET_PROFILE";
const SET_LOADING_PROFILE = "SET_LOADING_PROFILE";
const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID";
const SET_HAVE_FRIENDS = "SET_HAVE_FRIENDS";



const actionSetHaveFriends = value=> (
    {
        type: SET_HAVE_FRIENDS,
        value
    }
)
const actionSetProfile = value=> (
    {
        type: SET_PROFILE,
        value
    }
)
const actionSetLoading = value=> (
    {
        type: SET_LOADING_PROFILE,
        value
    }
)
const actionSetCurrentUserId = value=> (
    {
        type: SET_CURRENT_USER_ID,
        value
    }
)




const getProfile = (id, companionId)=> {
    return dispath=> {
        console.log("FETCH PROFILE", id, companionId);
        dispath(actionSetLoading(true));
        userAPI.getUserProfile(id, companionId).then(result=>{
            dispath(actionSetProfile(result));
            dispath(actionSetCurrentUserId(id));
            dispath(actionSetLoading(false));
        })
    }
}

export {
    SET_PROFILE,
    SET_LOADING_PROFILE,
    SET_CURRENT_USER_ID,
    SET_HAVE_FRIENDS,
    actionSetHaveFriends,
    actionSetLoading,
    getProfile
}