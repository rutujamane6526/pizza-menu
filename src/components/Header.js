import React from "react";


let header = 'Fast React Pizza Co.';

function Header()
{
    return (
    <div className="header">
        <h1>{header.toUpperCase()}</h1>
     
    </div>

    );
}

export default Header;