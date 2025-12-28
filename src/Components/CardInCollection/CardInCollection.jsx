import './CardInCollection.css'
import Card from "../Card/Card.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardInCollection({children}) {
    return (

        <article>
            <Card>
                {children}
                <div className="button-container">
                    <div className="card-management">
                        <CardCounter/>
                        <ButtonSmall
                            className="button-small red-minus"
                            buttonContent="-"
                        />
                        <ButtonSmall
                            className="button-small green-plus"
                            buttonContent="+"
                        />
                    </div>
                </div>
            </Card>
        </article>
    )
}

export default CardInCollection