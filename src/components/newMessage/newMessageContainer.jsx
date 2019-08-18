import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { withUserId } from "../../HOC/withUserID";
import {  actionSetMessageListCreate } from "../../store/newMessage/action";
import { createMessageList } from "../../dal/newMessageSocket";


class NewMessageContainer extends React.Component {

    constructor(props){
        super(props);

        createMessageList(this.props.userId, this.props.match.params.id, this.props.setMessageListCreate);

    }

    render(){
        console.log(this.props);

        if(this.props.messageListId){
            return <Redirect to={`/message/${this.props.messageListId}`}/>
        } else {
            return null
        }
    }
}

const mapStateToProps = state=>(
    {
       messageListId: state.newMessage.newMessageListId
    }
)

export default compose(

    withUserId,
    connect(mapStateToProps,{
        setMessageListCreate: actionSetMessageListCreate
    })

)(NewMessageContainer)