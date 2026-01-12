import './CardManagement.css'
import React from "react";
import CardCounter from "../CardCounter/CardCounter.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import LightBox from "../LightBox/LightBox.jsx";
import MagnifyingGlass from "/src/assets/symbols/magnifying-glass.svg?react";
/*import { Routes, Route } from 'react-router-dom';*/

function CardManagement({counter, children}) {

    const [open, setOpen] = React.useState(false);

    return (

        <div className="card-management">
            {counter}
            {children}
        </div>
    )
}

export default CardManagement