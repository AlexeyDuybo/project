import { createStore, combineReducers, applyMiddleware } from "redux";
import mainMenuReducer from "./mainMenu/reducer";
import authReducer from "./auth/reducer";
import friendsListReducer from "./friendsList/reducer";
import profileReducer from "./profile/reducer";
import messagesReducer from "./message/reducer";
import newMessagesReducer from "./newMessage/reducer";
import requestsReducer from "./requests/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer,
    mainMenu: mainMenuReducer,
    friends: friendsListReducer,
    profile: profileReducer,
    messages: messagesReducer,
    newMessage: newMessagesReducer,
    requests: requestsReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));