import './CardTypeDropdown.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CardCounter from "../CardCounter/CardCounter.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function CardTypeDropdown({children,cardType, counter}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container">
                    <h3>{cardType}</h3>
                    {counter}
                </summary>
                <div className="dropdown-content">
                    <ul>
                        {children}
                    </ul>
                </div>
            </details>
        </article>
    )
}

export default CardTypeDropdown