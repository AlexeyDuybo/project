import { SET_FRIENDS, SET_LOADING_FRIENDS_LIST } from "./action";

const initialState = {
    friendsList: [],
    isLoading: true
}

export default (state = initialState, action)=>{
    switch(action.type){
        case SET_FRIENDS:
            return {...state, friendsList: action.value};
        case SET_LOADING_FRIENDS_LIST:
            return {...state, isLoading: action.value};
        default:
            return state;
    }
}