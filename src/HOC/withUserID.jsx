import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state=> (
    {
    userId: state.auth.userId
    }
)

const withUserId = Component=> {
    const WrappedComponent = props=> {
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(WrappedComponent);
}

export {
    withUserId
}

