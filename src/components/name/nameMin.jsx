import React from "react";
import { Link } from "react-router-dom";
import Name from "./nameMinDefault";
export default props=> {
    return(
        <Link className="link" to={props.path}>
            <Name name={props.name}/>
        </Link>
    )
}