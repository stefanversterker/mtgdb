import './Card.css'
import CardCounter from "../CardCounter/CardCounter.jsx";
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";

/*import { Routes, Route } from 'react-router-dom';*/

function Card({children}) {
    return (

        <article className="card-container">
            {children}
        </article>
    )
}

export default Card