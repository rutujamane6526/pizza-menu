import React from "react";

function Auther(props)
{
    return(
        <>
            <h4 className="h4">{props.name} {props.surname}</h4>
        </>

    );
}

export default Auther;