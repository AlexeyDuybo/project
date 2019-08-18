import { SET_MESSAGE_LIST_CREATE } from "./action";

const initialState = {
    newMessageListId: null
}

export default (state = initialState, action)=> {
    switch(action.type){
        case SET_MESSAGE_LIST_CREATE:
            return {...state, newMessageListId: action.value};
        default:
            return state;
    }
}