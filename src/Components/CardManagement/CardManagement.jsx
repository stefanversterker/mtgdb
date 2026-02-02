import './CardManagement.css'
import React from "react";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";

function CardManagement({children, lightBoxSource}) {

    return (

        <div className="card-management">
            {children}
            <ButtonMagnify lightBoxSource={lightBoxSource}></ButtonMagnify>
        </div>
    )
}

export default CardManagement