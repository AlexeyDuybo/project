import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withUserId } from "../../HOC/withUserID";
import MessagesList from "./messagesList";
import { getMessages } from "../../store/message/action";

class MessagesListContainer extends React.Component {

    componentDidMount(){
        this.props.getMessages(this.props.userId);
    }

    render(){
        return <MessagesList messagesList={this.props.messagesList}/>
    }
}

const mapStateToProps = state=> (
    {
        messagesList: state.messages.messagesList
    }
)

export default compose(
    withUserId,
    connect(mapStateToProps,{ getMessages })
)(MessagesListContainer);
