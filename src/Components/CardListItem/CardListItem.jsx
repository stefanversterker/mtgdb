import './CardListItem.css'
import CardManagement from "../CardManagement/CardManagement.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardListItem({cardName, management}) {
    return (

        <li className="card-list-item">
            <p>{cardName}</p>
            {management}
        </li>
    )
}

export default CardListItem