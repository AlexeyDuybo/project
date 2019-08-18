import { SET_MESSAGES, SET_MESSAGES_WITH_COMPANION, CLEAR_MESSAGE_WITH_COMPANION } from "./action";

const initialState = {
    messagesList: [],
    messagesWithCompanion: []
}

export default (state = initialState, action)=>{
    switch( action.type ){
        case SET_MESSAGES: 
            return {...state, messagesList: action.value};
        case SET_MESSAGES_WITH_COMPANION:
            return {...state, messagesWithCompanion: action.value};
        case CLEAR_MESSAGE_WITH_COMPANION:
            return {...state, messagesWithCompanion: [] };
        default: 
            return state;
    }
}