import './CardManagement.css'
import React from "react";

function CardManagement({children}) {

    return (

        <div className="card-management">
            {children}
        </div>
    )
}

export default CardManagement