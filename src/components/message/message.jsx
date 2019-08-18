import React from "react";
import MessageItem from "../messageItem/messageItem";
import { getDate } from "../../tootls/getDate";
export default class Message extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            message: ""
        }
    }

    handleChange = e=> {

        this.setState({
            message: e.target.value
        })

    }

    handleSubmit = e=> {
        e.preventDefault();
        this.props.addMessage({
            authorId: this.props.userId,
            chatId: this.props.chatId,
            date: getDate("d:m:y"),
            text: this.state.message
        });
        this.setState({
            message: ""
        })
    }


    render(){
        console.log("RENDER MESSAGES");

        const messages = this.props.messages.map( message => {
            const isYou = Number(this.props.userId) === Number(message.author.id);
            return(
                <li className="message-window__item" key={message.id}>
                    <MessageItem 
                                    name={message.author.name} 
                                    src={message.author.img} 
                                    authorId={message.author.id}
                                    date={message.date}
                                    text={message.text}
                                    isYou={isYou}
                    />
                </li>
            )
        })

        return(
            <div className="message-window">
                <ul className="message-window__list">
                    {messages}
                </ul>
                <form className="message-window__form" onSubmit={this.handleSubmit}>
                    <input type="text" className="message-window__input" value={this.state.message} onChange={this.handleChange}/>
                    <input type="submit" className="message-window__send-button"/>
                </form>  
            </div>
        )
    }

}