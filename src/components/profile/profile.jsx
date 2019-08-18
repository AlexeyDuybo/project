import React from "react";
import { Link } from "react-router-dom";
import UserBlockData from "../userProfile/userBlockData";
import defaultImg from "../../img/unlogedUser";
import Loading from "../loading/loading";
import PostsBlock from "../posts/posts";
import ProfileActionItem from "../profileActionItem/profileActionItem";

export default class Profile extends React.PureComponent {

    // shouldComponentUpdate(nextProps){
    //     // if( nextProps.isLoading !== this.props.isLoading){
    //         console.log("upd", this.props, nextProps);
    //         return true;
    //     // } 
    //     // return false;
    // }

    render(){
        if( this.props.isLoading ){
            // console.log("RENDER PROFILE LOADING");
            return(
                <div className="profile">
                    <Loading/>
                </div> 
            )
        } else {
            console.log("RENDER PROFILE", this.props);

            const { age, city, name, surname, status, isOnline, img = defaultImg, friends, groups , id, imgId, haveMessageList, haveFriends, sendRequest, cancelRequest, removeFriend } = this.props;
            return(
                <div className="profile">
                    <div className="profile__left">
                        <Link to={`/profile/${id}/images/${imgId}`}>
                            <span className="profile__img" style={{
                                backgroundImage: `url(${img})`
                            }}/>
                        </Link>

                        <ul className="profile__action-list">
                            <div className="profile__action">
                                { haveMessageList ?  <ProfileActionItem text="Send message" path={`/message/${haveMessageList}`}/> : <ProfileActionItem text="Send message" path={`/newmessage/${id}`}/>}
                            </div>
                            <div className="profile__action">
                                { haveFriends === 1 && <ProfileActionItem callback={removeFriend} text="Delete from friends" />}
                                { haveFriends === 0 && <ProfileActionItem callback={cancelRequest} text="Request send" />}
                                { haveFriends === 2 && <ProfileActionItem callback={sendRequest} text="Add to friends" />}
                            </div>
                        </ul>

                        <ul className="profile__data-container">
                            <li className="profile__data-item">
                                <UserBlockData items={friends} title="Friends" userId={id} path="friends"/>
                            </li>
                            <li className="profile__data-item">
                                <UserBlockData items={groups} title="Groups" userId={id} path="groups"/>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="profile__rigth">
                        <div className="profile__main-block">
                            <div className="profile__title">
                                <div className="profile__name">{name} {surname}</div>
                                <div className="profile__online">{isOnline ? "Online" : "Offline"}</div>
                            </div>
                            <div className="profile__status">
                                {status}
                            </div>
                        </div>
                        <div className="profile__information-block">
                            <div className="profile__seporator"/>
                                { city && <div className="profile__information">City: {city}</div> }
                                { age && <div className="profile__information">Age: {age}</div> }
                            <div className="profile__seporator"/>
                        </div>
                        <div className="profile__posts-block">
                            <PostsBlock posts={this.props.posts}/>
                        </div>
                    </div>
                </div>
        )
        }
    }
}