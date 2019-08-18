import React from "react";
import { Link } from "react-router-dom";


export default (props)=> {

    const menuList = props.menuLinks.map( link=> {
        return(
            <li className="main-menu__item" key={link.id}>
                <Link className="main-menu__link" to={link.path}>
                    {link.title}
                </Link>
            </li>
        )
    });

    return(
       <nav className="main-menu">
           <ul className="main-menu__list">
                {menuList}
           </ul>
       </nav>
    )
}