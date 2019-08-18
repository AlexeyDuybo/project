import React from "react";
import AuthItem from "./authItem";
export default props=> {
    console.log(props);

    const persons = props.persons.map( person => {
        const {id, name, surname, img} = person;
        return(
            <li key={person.id} className="auth__item">
                <AuthItem id={id} name={name} surname={surname} img={img} login={props.login}/>
            </li>
        )
    })

    return(
        <div className="auth">
            <div className="auth__title">Select a person</div>
            <ul className="auth__list">
                {persons}
            </ul>
        </div>
    )

}