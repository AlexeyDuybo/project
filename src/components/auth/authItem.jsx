import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/avatarMinDefault";

export default props => {
    const {name,surname,id,img, login} = props;

    const handleClick = ()=> {
        console.log("aloe");
        login(id);
    }

    return(
        <Link className="link" to="/">
            <span className="auth-item" onClick={handleClick}>
                <span className="auth-item__avatar">
                    <Avatar src={img}/>
                </span>
                <span className="auth-item__name">
                    {name} {surname}
                </span>
            </span>
        </Link>
    )

}