import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfile, actionSetLoading } from "../../store/profile/action";
import { withUserId } from "../../HOC/withUserID";
import { sendRequest, cancelRequest, removeFriend } from "../../dal/haveFriendsSocket";
import { joinProfile, leaveProfile, setCB } from "../../dal/profileSocket";

class ProfileContainer extends React.Component {


    componentDidMount(){
        const id = this.props.match.params.id || this.props.userId;
        this.props.getProfile(id, this.props.userId);
        setCB(this.props.getProfile.bind(null, id, this.props.userId)); 
        joinProfile(id);
    }
    

    


    componentDidUpdate(){
        const id = this.props.match.params.id || this.props.userId;
        if(!this.props.isLoading && Number(id) !== Number(this.props.profile.id)){
            leaveProfile();
            joinProfile(id);
            this.props.getProfile(id, this.props.userId);
        }
    }

    componentWillUnmount(){
        this.props.setLoading(true);
        leaveProfile();
    }
    render(){
        return <Profile
                        id={this.props.profile.id}
                        name={this.props.profile.name}
                        surname={this.props.profile.surname}
                        age={this.props.profile.age}
                        city={this.props.profile.city}
                        img={this.props.profile.img}
                        imgId={this.props.profile.imgId}
                        isOnline={this.props.profile.isOnline}
                        status={this.props.profile.status}
                        friends={this.props.profile.friendsLimited}
                        groups={this.props.profile.groupsLimited}
                        posts={this.props.profile.postsLimited}
                        isLoading={this.props.isLoading}
                        haveMessageList={this.props.profile.haveMessageList}
                        haveFriends={this.props.profile.haveFriends}
                        sendRequest={sendRequest.bind(null, this.props.profile.id, this.props.userId)}
                        cancelRequest={cancelRequest.bind(null, this.props.profile.id, this.props.userId)}
                        removeFriend={removeFriend.bind(null, this.props.profile.id, this.props.userId)}

        />
    }
}

const mapStateToProps = state=> (
    {
        profile: state.profile.profileData,
        isLoading: state.profile.isLoading,
    }
)

export default compose(
    connect(mapStateToProps, {
        getProfile,
        setLoading: actionSetLoading
    }),
    withUserId
    
)(ProfileContainer);