import React from "react";
import Message from "./message";
import { compose } from "redux";
import { connect  } from "react-redux";
import { getMessagesWithCompanion, actionClearMessages } from "../../store/message/action";
import { withUserId } from "../../HOC/withUserID";
import { messageSocket } from "../../dal/messagesSocket";


class MessageContainer extends React.Component {
    componentDidMount(){
        const messageId = this.props.match.params.id;
        this.props.getMessagesWithCompanion(messageId);
        messageSocket.joinMessageWindow(messageId);
        messageSocket.watchMessageWindow(this.props.getMessagesWithCompanion);
        
    }

    componentWillUnmount(){
        this.props.actionClearMessages();
        messageSocket.leaveMessageWindow();
    }

    render(){
        return <Message 
                        messages={this.props.messages} 
                        userId={this.props.userId}  
                        chatId={this.props.match.params.id}
                        addMessage={messageSocket.addMessage}
                />
    }
}

const mapStateToProps = state=>(
    {
        messages: state.messages.messagesWithCompanion
    }
)

export default compose(
    withUserId,
    connect(mapStateToProps,{
        getMessagesWithCompanion,
        actionClearMessages
    })
)(MessageContainer)