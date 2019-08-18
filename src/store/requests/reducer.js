import { SET_REQUESTS } from "./action";

const initialState = {
    requests: []
}

export default (state = initialState, action)=> {
    switch(action.type){
        case SET_REQUESTS:
            return {...state, requests: action.value}
        default:
            return state;
    }
}