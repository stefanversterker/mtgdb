import './CardListItem.css';
import CardManagement from "../CardManagement/CardManagement.jsx";
import ButtonMagnify from "../ButtonMagnify/ButtonMagnify.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";

function CardListItem({cardName}) {
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