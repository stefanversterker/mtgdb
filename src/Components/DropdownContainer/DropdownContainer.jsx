import './DropdownContainer.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CardListItem from "../CardListItem/CardListItem.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function DropdownContainer({children,summaryLeft, summaryRight}) {
    return (

        <article>
            <details open className="dropdown-container purple-border">
                <summary className="summary-container">
                    <h3>{summaryLeft}</h3>
                    {summaryRight}
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

export default DropdownContainer