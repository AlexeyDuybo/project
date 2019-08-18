import React from "react";
import RequestItem from "../requestItem/requestItem";
export default props => {

    const requestsList = props.requests.map( request => {
        const { name, surname, id, img } = request;
        return(
            <li className="requests__item" key={request.id}>
                <RequestItem name={name} surname={surname} id={id} img={img}/>
            </li>
        )
    } )

    return(
        <div className="requests">
            <ul className="requests__list">
                {requestsList}
            </ul>
        </div>
    )
}