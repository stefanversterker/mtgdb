import './CardInDataBase.css'
import Card from "../Card/Card.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
/*import { Routes, Route } from 'react-router-dom';*/

function CardInDataBase({children}) {
    return (

        <li>
            <Card>
                {children}
                <div className="button-container purple-border">
                    <ButtonSmall className="button-small add-button"
                                 buttonContent="Add>>"
                    />
                </div>
            </Card>
        </li>
    )
}

export default CardInDataBase