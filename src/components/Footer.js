import React from "react";

function Footer()
{
    const openHour = 10;
    const closeHour  = 22 ;
    // let openText  = "We are open  from " + openHour + ". ";
    // let closeText  = "We will remain open till " + closeHour + ". ";
    let openText = `We are open from ${openHour}. We will remain open till ${closeHour}`;
    let closeText = "We will soon open at 10AM.";

    const hour = new Date(). getHours();
    //const hour = 23; 
    const outputText = hour <  closeHour ? openText : closeText;  

    //ternary operator
    return(
        <>
            { hour < closeHour ? (
                <>
                <h2>{outputText}</h2>
            
                <div className="footer">
                    <button className="btn">Order</button>
                </div>
            </>
            ) : (
                <h2> {outputText}</h2>
            )}
                
        </>
    );
}
export default Footer;