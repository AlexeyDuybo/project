import { LOGIN, SET_PERSONS } from "./action";

const initialState = {
    isLogged: false,
    userId: null,
    persons: []
}

export default (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {...state, isLogged: true, userId: action.value};
        case SET_PERSONS:
            return {...state, persons: action.value};
        default:
            return state;
    }
    
}