import React from "react";
import defaultImg from "../../img/unlogedUser";
import Name from "../name/nameMin";
import Avatar from "../avatar/avatarMin";
export default props=> {
    const img = props.img ? props.img : defaultImg;
    const path = `/profile/${props.id}`
    return(
        <div className="user">
            <div className="user__avatar">
                <Avatar path={path} src={img}/>
            </div>
            <div className="user__data">
                <div className="user__name">
                    <Name name={props.name + " " + props.surname} path={path}/>
                </div>
                <div className="user__status">{props.isOnline ? "Online" : "Offline"}</div>
            </div>
        </div>
    )
}