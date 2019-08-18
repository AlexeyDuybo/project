import React from "react";
import Auth from "./auth";
import { connect } from "react-redux";
import { getPersons, actionLogin } from "../../store/auth/action";

class AuthContainer extends React.Component {

    componentDidMount(){
        this.props.getPersons();
    }

    render(){
        return <Auth persons={this.props.persons} login={this.props.login}/>
    }

}

const mapStateToProps = state=>(
    {
        persons: state.auth.persons
    }
)

export default connect(mapStateToProps, { getPersons, login: actionLogin })(AuthContainer);
