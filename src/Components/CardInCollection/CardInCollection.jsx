import './CardInCollection.css'
import Card from "../Card/Card.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";
import CardManagement from "../CardManagement/CardManagement.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardInCollection({children, management}) {
    return (

        <li>
            <Card>
                {children}
                <div className="button-container">
                    {management}
                </div>
            </Card>
        </li>
    )
}

export default CardInCollection