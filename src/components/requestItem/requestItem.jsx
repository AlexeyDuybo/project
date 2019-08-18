import React from "react";
import Avatar from "../avatar/avatarMin";
import Name from "../name/nameMin";

export default props=> {
    const { name, surname, img, id, cb1, cb2 } = props;
    return(
        <div className="request-item">
            <div className="request-item__data">
                <span className="request-item__avatar">
                    <Avatar src={img} path={`/profile/${id}`} />
                </span>
                <span className="request-item__name">
                    <Name path={`/profile/${id}`} name={`${name} ${surname}`}/>
                </span>
            </div>
            <div className="request-item__action">
                <button className="request-item__button" onClick={cb1}>
                    Accept
                </button>
                <button className="request-item__button" onClick={cb2}>
                    Cancel
                </button>
            </div>
        </div>
    )
}