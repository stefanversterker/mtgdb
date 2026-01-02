import './CardCounter.css'
/*import { Routes, Route } from 'react-router-dom';*/

function CardCounter({cardAmount, children}) {
    return (

        <div className="card-counter-container">
            {cardAmount}
        </div>
    )
}

export default CardCounter