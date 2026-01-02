import './CardManagement.css'
import CardCounter from "../CardCounter/CardCounter.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function CardManagement({counter}) {
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
        </div>
    )
}

export default CardManagement