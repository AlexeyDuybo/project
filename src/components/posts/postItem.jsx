import React from "react";
import Avatar from "../avatar/avatarMin";
import Name from "../name/nameMin";
export default props=> {

    const path = `/profile/${props.author.id}`;
    const src = props.author.img;
    const name = props.author.name + " " + props.author.surname;

    return(
        <div className="post-item">
            <span className="post-item__avatar">
                <Avatar path={path} src={src}/>
            </span>
            <div className="post-item__container">
                <div className="post-item__title">
                    <Name path={path} name={name}/>
                </div>
                <div className="post-item__data">
                    <div className="post-item__text">
                        {props.text}
                    </div>
                    <div className="post-item__meta">
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}