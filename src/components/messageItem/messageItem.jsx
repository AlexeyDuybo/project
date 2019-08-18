import React from "react";
import Name from "../name/nameMin";
import Avatar from "../avatar/avatarMin";

export default class messageItem extends React.PureComponent {
    render(){
        console.log("render message item");
        const className = this.props.isYou ? "message-item right" : "message-item left";
        const name = this.props.isYou ? "You" : this.props.name
        const path = `/profile/${this.props.authorId}`
        return(
            <div className={className}>
                <div className="message-item__avatar">
                    <Avatar path={path} src={this.props.src}/>
                </div>
                <div className="message-item__data">
                    <div className="message-item__title">
                        <div className="message-item__name">
                            <Name path={path} name={name}/>
                        </div>
                        <div className="message-item__date">
                            {this.props.date}
                        </div>
                    </div>
                    <div className="message-item__text">
                            {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}