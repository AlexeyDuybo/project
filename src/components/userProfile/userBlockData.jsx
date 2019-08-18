import React from "react";
import { Link } from "react-router-dom";
import Item from "../item/itemProfile";
export default props=> {
    const userBlockDataItems = props.items.map( item=> {
        return(
            <li className="user-block-data__item" key={item.id}>
                <Item itemId={item.id} name={item.name} img={item.img} type={props.path}/>
            </li>
        )
    })
    return(
        <div className="user-block-data">
            <Link className="link" to={`/profile/${props.userId}/${props.path}`}>
                <span className="user-block-data__title">{props.title}</span>
            </Link>
            <ul className="user-block-data__list">
                { userBlockDataItems }
            </ul>
        </div>
    )
}