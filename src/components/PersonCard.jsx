import React from "react";
const PersonCard = props => {
    return(
        <fieldset>
            <legend>  <h1>{props.lastName}, {props.firstName}</h1></legend>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </fieldset>
    );
}
export default PersonCard;