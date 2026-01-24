import './Card.css'
import CounterBox from "../CounterBox/CounterBox.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function Card({children, management}) {
    return (

        <li className="card-container">
                {children}
                <div className="button-container">
                    {management}
                </div>
        </li>
    )
}

export default Card