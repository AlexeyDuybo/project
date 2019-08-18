import React from "react";
import Request from "./requests";
import { compose } from "redux";
import { connect } from "react-redux";
import { withUserId } from "../../HOC/withUserID";
import { getRequests } from "../../store/requests/action";

class RequestContainer extends React.Component {

    componentDidMount(){
        this.props.getRequests(this.props.userId);
    }

    render(){
        console.log(this.props);
        return <Request requests={this.props.requests}/>
    }
}

const mapStateToProps = state=> (
    {
        requests: state.requests.requests
    }
)

export default compose(
    connect(mapStateToProps, { getRequests }),
    withUserId
)(RequestContainer);