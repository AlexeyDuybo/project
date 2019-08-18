import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import FriendsList from "./friendsList";
import { withUserId } from "../../HOC/withUserID";
import { getFriends } from "../../store/friendsList/action";




class FriendsListContainer extends React.Component {

    componentDidMount(){
        this.props.getFriends(this.props.userId);
    }

    render(){
        return <FriendsList friends={this.props.friendsList} isLoading={this.props.isLoading}/>
    }

}

const mapStateToProps = state=>(
    {
        friendsList: state.friends.friendsList,
        isLoading: state.friends.isLoading
    }
)

export default compose(
    connect(mapStateToProps, {
        getFriends
    }),
    withUserId
)(FriendsListContainer);