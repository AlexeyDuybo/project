import React from "react";

export default props => {
    return(
            <span className="avatar-min" style={
                {
                    backgroundImage: `url(${props.src})`
                }
            }/>
    )
}