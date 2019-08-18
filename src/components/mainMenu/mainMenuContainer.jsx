import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import MainMenu from "./mainMenu";

const MainMenuContainer = props=> { 
    return <MainMenu menuLinks={props.menuLinks}/>
}

const mapStateToProps = state=>(
    {
        menuLinks: state.mainMenu.menuLinks
    }
)


export default compose(
    connect(mapStateToProps)
)(MainMenuContainer)