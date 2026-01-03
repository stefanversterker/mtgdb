import './CardManagement.css'
import React from "react";
import CardCounter from "../CardCounter/CardCounter.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import LightBox from "../LightBox/LightBox.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function CardManagement({counter}) {

    const [open, setOpen] = React.useState(false);

    return (

        <div className="card-management">
            {counter}
            <ButtonSmall
                className="button-small red-minus"
                buttonContent="-"
            />
            <ButtonSmall
                className="button-small green-plus"
                buttonContent="+"
            />
            <ButtonSmall
                buttonContent="O"
                onClick={() => setOpen(true)}
            />

            <LightBox open={open} setOpen={setOpen}/>

        </div>
    )
}

export default CardManagement