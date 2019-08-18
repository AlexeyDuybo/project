import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state=> (
    {
        isLogged: state.auth.isLogged
    }
)

const withRedirect = Component=> {
    const WrappedComponent = props => {
        if ( props.isLogged ){
            return <Component {...props}/>
        } else {
            return <Redirect to="/auth/"/>
        }
    }
    return connect(mapStateToProps)(WrappedComponent);
}

export {
    withRedirect
}