import './CounterBox.css'
/*import { Routes, Route } from 'react-router-dom';*/

function CounterBox({cardAmount, className}) {
    return (

        <div className={`card-counter-container ${className}`}>
            {cardAmount}
        </div>
    )
}

export default CounterBox