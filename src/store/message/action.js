import { messageAPI } from "../../dal/messageApi";

const SET_MESSAGES = "SET_MESSAGES";
const SET_MESSAGES_WITH_COMPANION = "SET_MESSAGES_WITH_COMPANION";
const CLEAR_MESSAGE_WITH_COMPANION = "CLEAR_MESSAGE_WITH_COMPANION";

const actionAddMessageWithCompanion = value=> (
    {
        type: SET_MESSAGES_WITH_COMPANION,
        value
    }
)

const actionAddMessage = value=> (
    {
        type: SET_MESSAGES,
        value
    }
)

const getMessages = userId=> {
    return dispatch=> {
        console.log("FETCH MESSAGES LISTS", userId)
        messageAPI.getMessagesList( userId).then( result=> {
            dispatch(actionAddMessage(result));
        });
    }
}

const getMessagesWithCompanion = id=> {
    return dispatch=> {
        console.log("FETCH MESSAGES", id)
        messageAPI.getMessagesWithCompanion(id).then( result=> {
            dispatch(actionAddMessageWithCompanion(result));
        })
    }
}



const actionClearMessages = ()=> (
    {
        type: CLEAR_MESSAGE_WITH_COMPANION
    }
)

export {
    SET_MESSAGES,
    SET_MESSAGES_WITH_COMPANION,
    CLEAR_MESSAGE_WITH_COMPANION,
    getMessages,
    getMessagesWithCompanion,
    actionClearMessages
}