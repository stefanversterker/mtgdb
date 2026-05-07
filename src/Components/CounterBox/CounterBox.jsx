import './CounterBox.css'

function CounterBox({cardAmount, className}) {
    return (

        <div className={`card-counter-container ${className}`}>
            {cardAmount}
        </div>
    )
}

export default CounterBox