import React from "react";
import defaultImg from "../../img/unlogedUser";
import Avatar from "../avatar/avatarMin";
import Name from "../name/nameMin";
export default props=> {
    const img = props.img ? props.img : defaultImg;
    let path = null;
    switch(props.type){
        case "friends": path = `/profile/${props.itemId}`; break;
        case "groups": path = `/group/${props.itemId}`; break;
        default: break;
    }

    const name = props.name.length > 9 ? props.name.split(" ")[0] : props.name;

    return(
        <div className="item-profile">
            <span className="item-profile__avatar">
                <Avatar path={path} src={img}/>
            </span>
            <span className="item-profile__name">
                <Name path={path} name={name}/>
            </span>
        </div>
    )

}
