import React from "react";
import { withUserId } from "../../HOC/withUserID";
import Content from "./content";
import { initConnect } from "../../dal/initConnect";
import { withRedirect } from "../../HOC/withRedirect";
import { compose } from "redux";

class ContentContainer extends React.Component {
    constructor(props){
        super(props);

        initConnect(this.props.userId);

    }

    render(){
        return <Content/>
    }
}

export default compose(
    withUserId,
    withRedirect
)(ContentContainer);