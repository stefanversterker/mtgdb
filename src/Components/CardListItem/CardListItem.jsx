import './CardListItem.css'
import CardManagement from "../CardManagement/CardManagement.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";
import ButtonMinus from "../ButtonMinus/ButtonMinus.jsx";
import ButtonPlus from "../ButtonPlus/ButtonPlus.jsx";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardListItem({cardName, cardAmount}) {
    return (

        <li className="card-list-item">
            <p>{cardName}</p>
            {<CardManagement>
                <CardCounter/>
                <ButtonMagnify/>
            </CardManagement>}
        </li>
    )
}

export default CardListItem