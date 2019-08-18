import React from "react";
import { Link }from "react-router-dom";
import Avatar from "./avatarMinDefault";

export default props => {
    return(
        <Link className="link" to={props.path}>
            <Avatar src={props.src}/>
        </Link>
    )
}