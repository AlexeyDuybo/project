import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/store";
import ContentContainer from "./components/content/contentContainer";
import AuthContainer from "./components/auth/authContainer";

window.store = store;

export default (props)=> {
    return(
            <BrowserRouter>
                <Provider store={store}> 
                    <ContentContainer/>
                    <Route path="/auth" component={AuthContainer}/>
                </Provider>
            </BrowserRouter>
    )
}
