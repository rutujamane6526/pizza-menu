import React from "react";
import Pizza from "./Pizza.js";
import pizzaData from "./../pizzaData.js";

let textHeading = 'Our Menu';
function Main()
{
    return(
        <div className="menu">
            <h2>{textHeading.toUpperCase()}</h2>

            <p>Authentic Italian cuisine. 6 dishes to choose from. 
                All from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
            {pizzaData.map( (el) => {
                return( 
                        <li className = {`pizza ${el.soldOut ? "sold-out" : " "}`}>
                            <Pizza 
                                key = {el.name}
                                name = {el.name}
                                ingredients = {el.ingredients}
                                price = {el.price}
                                img = {el.photoName}
                                soldOut = {el.soldOut}
                        />
                </li>
            
                );
           })}
             </ul>
        </div>
    );
}

export default Main;
