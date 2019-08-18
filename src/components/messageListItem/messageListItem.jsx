import React from "react";
import Avatar from "../avatar/avatarMinDefault";
import Name from "../name/nameMinDefault";
import { Link } from "react-router-dom";

export default props=> {
    const { id, companion, message } = props;
    if(message){
        return(
            <Link className="link" to={`/message/${id}`}>
                <span className="message-list-item">
                    <span className="message-list-item__img-block">
                        <Avatar src={companion.img}/>
                    </span>
                    <span className="message-list-item__content">
                        <span className="message-list-item__companion-name">
                            <Name name={companion.name + " " + companion.surname}/>
                        </span>
                        <span className="message-list-item__message-content">
                            <span className="message-list-item__dialog-img">
                                <Avatar src={message.author.img}/>
                            </span>
                            <span className="message-list-item__text">
                                {message.text}
                            </span>
                        </span>
                        <span className="message-list-item__date">
                                {message.date}
                        </span>
                    </span>
                </span>
            </Link>
        )
    } else {
        return null;
    }
}