import React from "react";

function Pizza(props)
{
    return(

    <>
        <img src={props.img} alt={props.name}/>
        <div>
            <h3> {props.name}</h3>
            <p>{props.ingredients}</p>
            <span> ${props.price}.00</span>
        </div>
    </>
    );
}

export default Pizza;