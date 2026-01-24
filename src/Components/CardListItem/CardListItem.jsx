import './CardListItem.css'
import CardManagement from "../CardManagement/CardManagement.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";
import ButtonMinus from "../ButtonMinus/ButtonMinus.jsx";
import ButtonPlus from "../ButtonPlus/ButtonPlus.jsx";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardListItem({cardName, cardAmount}) {
    return (

        <li className="card-list-item">
            <p>{cardName}</p>
            {<CardManagement>
                <ButtonSmall className="red-minus" buttonContent="-"/>
                <CardCounter cardAmount={cardAmount}/>
                <ButtonSmall className="green-plus" buttonContent="+"/>
                <ButtonMagnify/>
            </CardManagement>}
        </li>
    )
}

export default CardListItem