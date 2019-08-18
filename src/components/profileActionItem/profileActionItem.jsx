import React from "react";
import { Link } from "react-router-dom";

export default props => {

    if( props.path ){
        return(
            <div className="profile-action-item" onClick={props.callback}>
                <Link className="link" to={props.path}>
                    <span className="profile-action-item__name">
                        {props.text}
                    </span>
                </Link>
            </div>
        )
    } else {
        return(
            <div className="profile-action-item" onClick={props.callback}>
                <span className="profile-action-item__name">
                    {props.text}
                </span>
            </div>
        )
    }
}
