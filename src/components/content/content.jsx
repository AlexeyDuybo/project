import React from "react";
import { Route } from "react-router-dom";
import MainMenuContainer from "../mainMenu/mainMenuContainer";
import FriendsListContainer from "../friendsList/friendListContainer";
import ProfileContainer from "../profile/profileContainer";
import MessagesContainer from "../messagesList/messagesListContainer";
import MessageWindowContainer from "../message/messageContainer";
import NewMessageContainer from "../newMessage/newMessageContainer";
import RequestContainer from "../requests/requestsContainer";
export default (props)=> {
    return(
        <div className="app">
            <header className="header">footer</header>
            <div className="wrapper">
                <aside className="sidebar">
                    <MainMenuContainer/>
                </aside>
                <main className="content">
                    <Route path="/friends/" component={FriendsListContainer}/>
                    <Route path="/profile/:id?" component={ProfileContainer}/>
                    <Route exact path="/messages/" component={MessagesContainer}/>
                    <Route path="/message/:id" component={MessageWindowContainer}/>
                    <Route path="/newmessage/:id" component={NewMessageContainer}/>
                    <Route path="/requests/" component={RequestContainer}/>
                </main>
            </div>
        </div>
    )
}
