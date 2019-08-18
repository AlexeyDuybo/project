import { SET_PROFILE, SET_LOADING_PROFILE, SET_CURRENT_USER_ID, SET_HAVE_FRIENDS } from "./action";



const initialState = {
    profileData: {
        id: null,
        name: null,
        city: null,
        age: null,
        status: null,
        img: null,
        imgId: null,
        friendsLimited: [],
        groupsLimited: [],
        postsLimited: [],
        isOnline: null,
        surname: null,
        haveMessageList: null,
        haveFriends: null
    },
    isLoading: true,
    currentUserId: null,
}

export default (state = initialState, action)=> {
    switch(action.type){
        case SET_PROFILE:
            return {...state, profileData: action.value};
        case SET_LOADING_PROFILE:
            return {...state, isLoading: action.value};
        case SET_CURRENT_USER_ID:  
            return {...state, currentUserId: action.value};
        case SET_HAVE_FRIENDS:
            return {...state, profileData: {...state.profileData, haveFriends: action.value}}
        default:
            return state;
    }
}