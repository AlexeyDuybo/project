import React from "react";
import MessageListItem from "../messageListItem/messageListItem";
export default props=> {

    const messagesList = props.messagesList.map( messageList => {
        const { id, companion, message } = messageList;
        return (
            <li className="messages__item" key={id}>
                <MessageListItem id={messageList.id} companion={companion} message={message}/> 
            </li>
        )
    })

    console.log("RENDER MESSAGE LIST", props);

    return(
        <div className="messages">
            <ul className="messages__list">
                {messagesList}
            </ul>
        </div>
    )
}

