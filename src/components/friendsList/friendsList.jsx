import React from "react";
import UserProfile from "../userProfile/userProfile";
import Loading from "../loading/loading";
export default props=> {
    const friendsList = props.friends.map( friend => {
        return(
            <li className="friends__item" key={friend.id}>
                <UserProfile 
                            id={friend.id} 
                            name={friend.name}
                            surname={friend.surname}
                            img={friend.img}
                            isOnline={friend.isOnline}
                />
            </li>
        )
    })
    return(
        <div className="friends">
            <ul className="friends__list">
                { props.isLoading ? <Loading/> : friendsList}
            </ul>
        </div>
    )
}