import './CardCounter.css'
import ButtonSmall from "../ButtonSmall/ButtonSmall.jsx";
import CounterBox from "../CounterBox/CounterBox.jsx"
import TrashIcon from "/src/assets/symbols/trash.svg?react";
import {useState} from 'react';

function CardCounter() {
    const [amount, setAmount] = useState(1)
    return (

        <div className="card-counter-box">
            <>
            {amount > 1 ? (
                <ButtonSmall buttonContent="-"
                             className="button-minus"
                            onClick={() => setAmount(amount && amount - 1)}>

                </ButtonSmall>
                ) : (
                <ButtonSmall buttonContent={<TrashIcon className="trash-icon"/>}
                             className="button-minus"
                >

                </ButtonSmall>
                )}
            </>
            <CounterBox className="square-counterbox" cardAmount={amount}></CounterBox>
            <ButtonSmall buttonContent="+" className="button-plus" onClick={() => setAmount(amount + 1)}></ButtonSmall>
        </div>
    )
}

export default CardCounter